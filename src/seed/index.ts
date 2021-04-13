import { config } from 'dotenv';
config();
import query from '../db';
import users from './user.json';
import transactions from './transaction.json';

const q = `insert into users (id, first_name, last_name, avatar, created_at) values ?`;

const q2 = `
INSERT INTO transactions (
    id,
    user_id,
    amount,
    type,
    date_time,
    category,
    icon_url
    ) VALUES ?`;

const values = users.map(
  ({ id, first_name, last_name, avatar, created_at }: any) => [
    id,
    first_name,
    last_name,
    avatar,
    created_at,
  ]
);

const values2 = transactions.map(
  ({ id, user_id, amount, type, date_time, category, icon_url }) => [
    id,
    user_id,
    amount,
    type,
    date_time,
    category,
    icon_url,
  ]
);

//
(async () => {
  await query(q, [values]).catch((e) => console.error(e));
  await query(q2, [values2]).catch((e) => console.error(e));
  process.exit(0);
})();
