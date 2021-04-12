import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ShadowCard from './ShadowCard';
dayjs.extend(relativeTime);

interface Props {
  selected: number | null;
  user: { [key: string]: any };
}

const RightSide = ({ user }: Props) => {
  return (
    <div className="flex flex-col items-center flex-grow">
      <img
        className="rounded-full w-[100px] mr-3 mt-[83px]"
        src={user.avatar}
      />
      <div className="text-3xl">
        {user.first_name} {user.last_name}
      </div>
      <div className="text-sm">
        {user.transactions} Transactions . Joined{' '}
        {dayjs().to(dayjs(user.created_at))}
      </div>
      <div className="mt-12 flex space-x-[11px]">
        <ShadowCard name="TOTAL SPENT" value={'₦' + user.debit} />
        <ShadowCard name="TOTAL INCOME" value={'₦' + user.credit} />
        <ShadowCard name="TRANSACTIONS" value={user.transactions} />
      </div>
    </div>
  );
};

export default RightSide;
