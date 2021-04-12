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

  getUser = async () => {
    const q = `
    select u.id, first_name, last_name, avatar, created_at, count(t.user_id) as transactions, sum(CASE WHEN t.type = 'debit' THEN t.amount ELSE 0 END) as debit, sum(CASE WHEN t.type = 'credit' THEN t.amount ELSE 0 END) as credit
from users u join transactions t on u.id=t.user_id group by u.id
    `;
    const res = await this.query(q);
    return res;
  };
}
