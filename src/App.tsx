import './App.css';
import styled from '@emotion/styled';
import Button from './component/Button';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Button onClick={()=>navigate('/users')}>User</Button>
      <Button onClick={()=>navigate('/posts')}>Post</Button>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
