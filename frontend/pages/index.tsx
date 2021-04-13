import axios from 'axios';
import { useEffect, useState } from 'react';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import { url } from '../utils/Constants';

const IndexPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    axios.get(`${url}/trend/users`).then((e) => {
      setUsers(e.data);
      setSelected(e.data[0]?.id);
    });
  }, []);
  return (
    <div>
      <nav className="h-[49px] bg-nv"></nav>
      <div className="flex">
        <LeftSide users={users} selected={selected} setSelected={setSelected} />
        {selected && (
          <RightSide
            users={users}
            selected={selected}
            setSelected={setSelected}
            user={users.find((e) => e.id === selected)}
          />
        )}
      </div>
    </div>
  );
};

export default IndexPage;
