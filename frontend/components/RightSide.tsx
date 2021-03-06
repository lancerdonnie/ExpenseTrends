import React, { useEffect, useState } from 'react';
import ShadowCard from './ShadowCard';
import axios from 'axios';
import { url } from '../utils/Constants';
import { relativeTime } from '../utils';
import UserCard from './UserCard';
import Spinner from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { SetSelectedUser } from '../redux/actions';

interface Props {
  user: { [key: string]: any };
}

const RightSide = ({ user }: Props) => {
  const [trends, setTrends] = useState<any[]>([]);
  const [similar, setSimilar] = useState<any[]>([]);

  const [isTrendLoading, setIsTrendloading] = useState(false);
  const [isSimilarLoading, setIsSimilarloading] = useState(false);

  const dispatch = useDispatch();
  const users: any[] = useSelector((state: any) => state.users);
  const selected: number | null = useSelector((state: any) => state.selected);

  useEffect(() => {
    setTrends([]);
    setSimilar([]);
    setIsTrendloading(true);
    axios
      .get(`${url}/trend/${selected}`)
      .then((res) => {
        setTrends(res.data);
      })
      .catch(console.error)
      .finally(() => {
        setIsTrendloading(false);
      });
  }, [selected]);

  useEffect(() => {
    if (trends.length) {
      setIsSimilarloading(true);
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
        })
        .catch(console.error)
        .finally(() => {
          setIsSimilarloading(false);
        });
    }
  }, [trends]);

  return (
    <div className="flex flex-col items-center flex-grow p-6">
      <img
        className="rounded-full w-[100px] mr-3 mt-[54px]"
        src={user.avatar}
      />
      <div className="text-3xl font-semibold">
        {user.first_name} {user.last_name}
      </div>
      <div className="text-sm">
        {user.transactions} Transactions . Joined{' '}
        {relativeTime(user.created_at)}
      </div>
      <div className="mt-12 flex space-x-[11px]">
        <ShadowCard name="TOTAL SPENT" value={'???' + user.debit} />
        <ShadowCard name="TOTAL INCOME" value={'???' + user.credit} />
        <ShadowCard name="TRANSACTIONS" value={user.transactions} />
      </div>
      <div className="mt-[74px] w-full flex ">
        <div className="w-2/4 ">
          <span className="text-15 flex-1">RECURRING EXPENSES</span>
          <div className="grid grid-cols-4 gap-x-[14px] mt-[34px]">
            {isTrendLoading ? (
              <Spinner size={30} />
            ) : (
              trends.map((trend) => (
                <div
                  key={trend.category}
                  className="bg-[#A7C5EB] rounded-[11px] w-[70px] h-[70px] p-3.5"
                >
                  <img src={trend.icon_url} />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="w-2/4 ">
          <span className="text-15 px-6">
            USERS LIKE {`'"${user.first_name} ${user.last_name}"`}
          </span>
          <div className="flex flex-col mt-[34px]">
            {isSimilarLoading ? (
              <Spinner size={30} />
            ) : (
              similar.map((user) => (
                <UserCard
                  key={user.id}
                  hideArrow
                  selected={selected}
                  user={user}
                  onClick={() => dispatch(SetSelectedUser(user.id))}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
