import { createContext } from 'react';
import { Cheese } from '../models/Cheese';

type CheeseContextType = {
  cheeses: Cheese[];
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>> | null;
};
export const CheeseContext = createContext<CheeseContextType>({
  cheeses: [],
  isSelected: false,
  setIsSelected: null,
});
