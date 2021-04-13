import type { ICradle } from '../types';

export default class Repo {
  query;

  constructor({ query }: ICradle) {
    this.query = query;
  }

  getUserExpenseTrends = async () => {
    const q = `
    select *, count(category) as ct FROM (select t.category, u.first_name, t.date_time, month(t.date_time) as m, count(category) as c
    from users u join transactions t on u.id = t.user_id
    where t.type='debit'
    and t.date_time  BETWEEN CURRENT_TIMESTAMP() - INTERVAL 1 YEAR AND CURRENT_TIMESTAMP()
    and t.category in ("clothing","gym","tollgate")
    GROUP BY category,m
    order by category,m)a group by category having ct >= 7
    `;
    const res = await this.query(q);
    return res;
  };

  getUsers = async () => {
    const q = `
    select u.id, first_name, last_name, avatar, created_at, count(t.user_id) as transactions, sum(CASE WHEN t.type = 'debit' THEN t.amount ELSE 0 END) as debit, sum(CASE WHEN t.type = 'credit' THEN t.amount ELSE 0 END) as credit
    from users u join transactions t on u.id=t.user_id group by u.id
    `;
    const res = await this.query(q);
    return res;
  };

  getTrend = async (id: number) => {
    const q = `
    select user_id,icon_url,category from (select user_id,icon_url,category ,month(t.date_time) as mnth
    from transactions t 
    where  user_id=?
    and type='debit'
    and t.date_time  BETWEEN CURRENT_TIMESTAMP() - INTERVAL 1 YEAR AND CURRENT_TIMESTAMP()
    group by category,mnth
    order by category)a
    join users u on u.id=a.user_id
    group by category
    having count(category)>6;`;
    const res = await this.query(q, [id]);
    return res;
  };

  getSimilarUsers = async (id: number, categories: string[]) => {
    const q = `
    select id from 
    (select count(distinct month(t.date_time)) as ct, month(t.date_time) as mnth, user_id,category 
    from transactions t 
    where t.category in (?) and type='debit' 
    and t.date_time  BETWEEN CURRENT_TIMESTAMP() - INTERVAL 1 YEAR AND CURRENT_TIMESTAMP()
    group by user_id,category
    having ct >=5
    order by category)a 
    join users u on a.user_id=u.id
    group by a.user_id having count(user_id) > 1 and not id=?
    order by user_id;`;

    const res = await this.query(q, [categories, id]);
    return res;
  };
}
