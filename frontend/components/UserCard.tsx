import React from 'react';
import { relativeTime } from '../utils';

interface Props {
  selected: number | null;
  user: { [key: string]: any };
  onClick?: () => void;
  hideArrow?: boolean;
}

const UserCard = ({ selected, user, onClick, hideArrow }: Props) => {
  return (
    <div
      key={user.id}
      className={`text-xl cursor-pointer flex justify-between items-center px-6 py-[9px] hover:bg-tint ${
        selected === user.id ? 'bg-tint' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <img className="rounded-full w-[45px] mr-3" src={user.avatar} />
        <div className="flex flex-col">
          <span>
            {user.first_name} {user.last_name}
          </span>
          <span className="text-10">
            {user.transactions} Transactions . Joined{' '}
            {relativeTime(user.created_at)}
          </span>
        </div>
      </div>
      {!hideArrow && (
        <svg
          className="justify-self-end"
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10L5 5.5L1 1"
            stroke="black"
            strokeOpacity="0.76"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default UserCard;
