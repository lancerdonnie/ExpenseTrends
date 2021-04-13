import { ADDUSERS, SETSELECTEDUSER } from './types';

export const AddUsers = (users: any[]) => {
  return {
    type: ADDUSERS,
    payload: users,
  };
};

export const SetSelectedUser = (sekected: number) => {
  return {
    type: SETSELECTEDUSER,
    payload: sekected,
  };
};
