import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

type Props = {
  cheese: { name: string; photo: string; isAdmin?: boolean };
};

const Item = ({ cheese }: Props) => {
  const { user } = useContext(UserContext);

  if (cheese.isAdmin && !user?.isAdmin) {
    return <div>You are not admin</div>;
  }
  return (
    <div>
      <div>{cheese.name}</div>
      <img src={cheese.photo} alt="" style={{ width: '10rem' }} />
    </div>
  );
};

export default Item;
