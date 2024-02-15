import Item from './Item';

type Props = {
  cheeses: { name: string; photo: string; isAdmin?: boolean }[];
};

const ItemList = ({ cheeses }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {cheeses.map((cheese) => (
        <Item cheese={cheese} key={cheese.name} />
      ))}
    </div>
  );
};

export default ItemList;
