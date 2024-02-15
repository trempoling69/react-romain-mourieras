import './App.css';
import styled from '@emotion/styled';
import Header from './component/Header';
import ItemView from './views/ItemView';
import { UserContext } from './context/UserContext';

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
const value = {
  user: { name: 'Raymond', isAdmin: false },
};
const App = () => {
  return (
    <UserContext.Provider value={value}>
      <MainContainer>
        <Header />
        <ItemView cheeses={cheeses} />
      </MainContainer>
    </UserContext.Provider>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
