import './App.css';
import styled from '@emotion/styled';

const App = () => {
  return (
    <MainContainer>
      <span>BIENVENUE JEUNE ENTREPRENEUR</span>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
