import React, { useEffect, useState } from 'react';
import ShadowCard from './ShadowCard';
import axios from 'axios';
import { url } from '../utils/Constants';
import { relativeTime } from '../utils';
import UserCard from './UserCard';

interface Props {
  selected: number;
  setSelected: (id: number) => void;
  user: { [key: string]: any };
  users: any[];
}

const RightSide = ({ user, users, selected, setSelected }: Props) => {
  const [trends, setTrends] = useState<any[]>([]);
  const [similar, setSimilar] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${url}/trend/${selected}`).then((res) => {
      setTrends(res.data);
    });
  }, [selected]);

  useEffect(() => {
    trends.length &&
      axios
        .post(`${url}/similar`, {
          id: selected,
          categories: trends.map((e) => e.category),
        })
        .then((res) => {
          const t = users.filter((e) =>
            res.data.find((x: any) => x.id === e.id)
          );
          setSimilar(t);
        });
  }, [trends]);

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
        {relativeTime(user.created_at)}
      </div>
      <div className="mt-12 flex space-x-[11px]">
        <ShadowCard name="TOTAL SPENT" value={'₦' + user.debit} />
        <ShadowCard name="TOTAL INCOME" value={'₦' + user.credit} />
        <ShadowCard name="TRANSACTIONS" value={user.transactions} />
      </div>
      <div className="mt-[74px] flex">
        <div>
          <span className="text-15">RECURRING EXPENSES</span>
          <div className="grid grid-cols-4 gap-x-[14px] mt-[34px]">
            {trends.map((trend) => (
              <div
                key={trend.category}
                className="bg-[#A7C5EB] rounded-[11px] w-[70px] p-3.5"
              >
                <img src={trend.icon_url} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-15 px-6">
            USERS LIKE {`'"${user.first_name} ${user.last_name}"`}
          </span>
          <div className="flex flex-col mt-[34px]">
            {similar.map((user) => (
              <UserCard
                key={user.id}
                hideArrow
                selected={selected}
                user={user}
                onClick={() => setSelected(user.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
