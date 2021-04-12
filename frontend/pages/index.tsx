import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../utils/Constants';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const IndexPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selected, setSelected] = useState<number | null>();

  useEffect(() => {
    axios.get(`${url}/users`).then((e) => {
      setUsers(e.data);
      setSelected(e.data[0]?.id);
    });
  }, []);
  return (
    <div>
      <nav className="h-[49px] bg-nv"></nav>
      <div className="flex">
        <div className="w-[411px]" style={{ borderRight: '1px solid #E5E5E5' }}>
          <div
            style={{ paddingTop: '21px', paddingBottom: '21px' }}
            className="text-15 px-6"
          >
            USERS
          </div>
          <div>
            {users.map((e) => (
              <div
                key={e.id}
                className={`text-xl cursor-pointer flex justify-between items-center px-6 py-[9px] ${
                  selected === e.id ? 'bg-tint' : ''
                }`}
                onClick={() => setSelected(e.id)}
              >
                <div className="flex items-center">
                  <img className="rounded-full w-[45px] mr-3" src={e.avatar} />
                  <div className="flex flex-col">
                    <span>
                      {e.first_name} {e.last_name}
                    </span>
                    <span className="text-10">
                      {e.transactions} Transactions . Joined{' '}
                      {dayjs().to(dayjs(e.created_at))}
                    </span>
                  </div>
                </div>
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
                    stroke-opacity="0.76"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
