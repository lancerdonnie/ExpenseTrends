export interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  created_at: Date;
}

export class User implements UserType {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  created_at: Date;
}
