import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import User from '../e-comm/User';

const Header = () => {
  return (
    <HeaderContainer>
      <CustomLink to="/">Fromage</CustomLink>
      <CustomLink to="/users">USER</CustomLink>
      <CustomLink to="/posts">POST</CustomLink>
      {/* <Link to="/users">USER</Link>
      <Link to="/posts">POST</Link> */}
      <User />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const CustomLink = styled(Link)`
  border-radius: 10px;
  padding: 0.2rem;
  background-color: antiquewhite;
  color: black;
`;
export default Header;
