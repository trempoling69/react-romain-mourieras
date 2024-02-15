import { useContext } from 'react';
import Item from './Item';
import { CheeseContext } from '../../context/CheeseContext';

const ItemList = () => {
  const { cheeses } = useContext(CheeseContext);
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {cheeses.map((cheese) => (
        <Item cheese={cheese} key={cheese.name} />
      ))}
    </div>
  );
};

export default ItemList;
