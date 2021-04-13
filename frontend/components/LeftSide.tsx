import React from 'react';
import UserCard from './UserCard';

interface Props {
  users: any[];
  selected: number | null;
  setSelected: (id: number) => void;
}

const LeftSide = ({ users, selected, setSelected }: Props) => {
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
            onClick={() => setSelected(e.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
