import { useState, useMemo } from 'react';
import Button from '../component/Button';
import TextField from '../component/Form/TextField';
import ListItem from '../component/ListItem';
import { createFakeUser } from '../services/createFakeUsers';
import styled from '@emotion/styled';
import Loading from '../component/Loading';
import { useUser } from '../hooks/useUsers';

const UserView = () => {
  const { users, loading, setUser, deleteUser } = useUser();
  const [searchText, setSearchText] = useState('');

  const createUser = () => {
    const newUser = createFakeUser(1);
    setUser([...users, ...newUser]);
  };

  const findUser = useMemo(() => {
    if (!searchText) return users;
    return users.filter((user) => user.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }, [searchText, users]);

  if (loading) {
    return <Loading />;
  }
  return (
    <MainContainer>
      <SearchContainer>
        <TextField onChange={(e) => setSearchText(e.target.value)} />
        <Button>Rechercher</Button>
      </SearchContainer>
      <ListContainer>
        {findUser.map(({ id, firstName, lastName, avatar }) => (
          <ListItem key={id} firstName={firstName} lastName={lastName} avatar={avatar} onClick={() => deleteUser(id)} />
        ))}
      </ListContainer>
      <Button onClick={createUser}>Créer</Button>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export default UserView;
