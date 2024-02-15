import './App.css';
import styled from '@emotion/styled';
import Header from './component/Header';
import ItemView from './views/ItemView';
import { UserContextProvider } from './context/UserContext';
import { useState } from 'react';
import { CheeseContext } from './context/CheeseContext';
import Footer from './component/Footer/Footer';

const cheeses = [
  { name: 'gouda', photo: 'https://www.laboitedufromager.com/wp-content/uploads/Gouda-48Mois_3Bis_OK_600600.jpg' },
  {
    name: 'babybel',
    photo:
      'https://cdn02.plentymarkets.com/xlzn8fmweulj/item/images/87739/full/87739-Mini-Kaese--Babybel-Lebensmittel-Attrappe-10-cm-800-022-26-0-6-00.png',
  },
  {
    name: 'Bleu',
    photo: 'https://static.laboxfromage.fr/wp-content/uploads/2020/04/10124958/pa%CC%82te-persille%CC%81e-.jpg',
    isAdmin: true,
  },
];
// const value = {
//   user: null,
//   // { name: 'Raymond', isAdmin: false },
// };
const App = () => {
  const [isSelected, setIsSelected] = useState(false);
  const value = { cheeses, isSelected, setIsSelected };
  return (
    <CheeseContext.Provider value={value}>
      <UserContextProvider>
        <MainContainer>
          <Header />
          <ItemView />
        </MainContainer>
      </UserContextProvider>
      <Footer />
    </CheeseContext.Provider>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
