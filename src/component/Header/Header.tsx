import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/users">USER</Link>
      <Link to="/posts">POST</Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: red;
`;

export default Header;
