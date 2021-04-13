export interface TransactionType {
  id: number;
  user_id: number;
  amount: string;
  type: string;
  date_time: Date;
  category: string;
  icon_url: string;
}

export class Transaction implements TransactionType {
  id: number;
  user_id: number;
  amount: string;
  type: string;
  date_time: Date;
  category: string;
  icon_url: string;
}
