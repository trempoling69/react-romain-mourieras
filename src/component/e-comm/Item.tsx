import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Cheese } from '../../models/Cheese';
import { CheeseContext } from '../../context/CheeseContext';

type Props = {
  cheese: Cheese;
};

const Item = ({ cheese }: Props) => {
  const { isSelected } = useContext(CheeseContext);
  const { user } = useContext(UserContext);

  if (cheese.isAdmin && !user?.isAdmin) {
    return <div>You are not admin</div>;
  }
  return (
    <div style={isSelected ? { border: '5px red solid' } : { border: '2px gray solid' }}>
      <div>{cheese.name}</div>
      <img src={cheese.photo} alt="" style={{ width: '10rem' }} />
    </div>
  );
};

export default Item;
