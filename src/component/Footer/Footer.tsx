import { useContext } from 'react';
import { CheeseContext } from '../../context/CheeseContext';

const Footer = () => {
  const { setIsSelected, isSelected } = useContext(CheeseContext);
  const onClick = () => {
    if (setIsSelected) {
      setIsSelected(!isSelected);
    }
  };
  return (
    <div>
      Footer
      <button onClick={onClick}>Selectionner</button>
    </div>
  );
};

export default Footer;
