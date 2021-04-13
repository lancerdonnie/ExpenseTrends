import { ADDUSERS, SETSELECTEDUSER } from './types';

type RootType = {
  users: any[];
  selected: null | number;
};

export const initialState: RootType = {
  users: [],
  selected: null,
};

const reducer = (
  state: RootType = initialState,
  action: { type: string; payload?: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case ADDUSERS:
      return {
        ...state,
        users: payload,
      };
    case SETSELECTEDUSER:
      return {
        ...state,
        selected: payload,
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;

export default reducer;
