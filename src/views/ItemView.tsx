import ItemList from '../component/e-comm/itemList';

type Props = {
  cheeses: { name: string; photo: string; isAdmin?: boolean }[];
};

const ItemView = ({ cheeses }: Props) => {
  return (
    <div>
      <ItemList cheeses={cheeses} />
    </div>
  );
};

export default ItemView;
