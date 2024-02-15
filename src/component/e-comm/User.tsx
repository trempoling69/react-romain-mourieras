import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const User = () => {
  const { user } = useContext(UserContext);
  return <div>{user?.name}</div>;
};

export default User;
