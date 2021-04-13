import axios from 'axios';
import { useEffect, useState } from 'react';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Spinner from '../components/Spinner';
import { url } from '../utils/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { AddUsers, SetSelectedUser } from '../redux/actions';

const IndexPage = () => {
  const users: any[] = useSelector((state: any) => state.users);
  const selected: number | null = useSelector((state: any) => state.selected);

  const dispatch = useDispatch();

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/trend/users`)
      .then((e) => {
        dispatch(AddUsers(e.data));
        dispatch(SetSelectedUser(e.data[0]?.id));
      })
      .catch(console.error)
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  if (isLoading) return <Spinner customClass="h-screen" />;

  return (
    <div>
      <nav className="h-[49px] bg-nv"></nav>
      <div className="flex">
        <LeftSide />
        {selected && <RightSide user={users.find((e) => e.id === selected)} />}
      </div>
    </div>
  );
};

export default IndexPage;
