import React from 'react';
import UserCard from './UserCard';
import { useSelector, useDispatch } from 'react-redux';
import { SetSelectedUser } from '../redux/actions';

const LeftSide = () => {
  const dispatch = useDispatch();

  const users: any[] = useSelector((state: any) => state.users);
  const selected: number | null = useSelector((state: any) => state.selected);

  return (
    <div className="w-[411px]" style={{ borderRight: '1px solid #E5E5E5' }}>
      <div
        style={{ paddingTop: '21px', paddingBottom: '21px' }}
        className="text-15 px-6"
      >
        USERS
      </div>
      <div>
        {users.map((e) => (
          <UserCard
            key={e.id}
            selected={selected}
            user={e}
            onClick={() => dispatch(SetSelectedUser(e.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
