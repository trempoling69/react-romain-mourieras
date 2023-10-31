import styled from '@emotion/styled';
import Avatar from '../Avatar';

type Props = {
  firstName: string;
  lastName: string;
  avatar: string;
  onClick?: () => void;
};

const ListItem = ({ firstName, lastName, avatar, onClick }: Props) => {
  return (
    <ItemContainer onClick={onClick}>
      <Avatar src={avatar} />
      {firstName} - {lastName}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.25s;
  &:hover {
    background-color: violet;
  }
`;

export default ListItem;
