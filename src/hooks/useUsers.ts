import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/users/api';
import { transformUser } from '../services/users/utils';
import { User } from '../models/User';

export const useUser = () => {
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Methode 1
    // const handleFetchUsers = async () => {
    //   const result = await fetchUsers();
    //   console.log(result);
    //   const transformed = result.users.map(transformUser);
    //   setUser(transformed);
    //   setLoading(false);
    // };

    // handleFetchUsers();

    //Methode 2
    // fetchUsers().then((result) => {
    //   const transformed = result.users.map(transformUser);
    //   setUser(transformed);
    //   setLoading(false);
    // });

    //Methode 3
    (async () => {
      const result = await fetchUsers();
      const transformed = result.users.map(transformUser);
      setUser(transformed);
      setLoading(false);
    })();
    // setTimeout(() => {
    //   setUser(createFakeUser(10));
    //   setLoading(false);
    // }, 500);
  }, []);

  const deleteUser = (id: number) => {
    const newUser = users.filter((user) => user.id !== id);
    setUser(newUser);
  };
  return { users, loading, deleteUser, setUser };
};
