import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <CustomLink to="/users">USER</CustomLink>
      <CustomLink to="/posts">POST</CustomLink>
      {/* <Link to="/users">USER</Link>
      <Link to="/posts">POST</Link> */}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: red;
`;

const CustomLink = styled(Link)`
  border-radius: 10rem;
  background-color: antiquewhite;
`;
export default Header;
