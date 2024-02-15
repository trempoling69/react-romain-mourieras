import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const User = () => {
  const { user, login } = useContext(UserContext);

  if (!user) {
    return <button onClick={login}>login</button>;
  }
  return <div>{user?.name}</div>;
};

export default User;
