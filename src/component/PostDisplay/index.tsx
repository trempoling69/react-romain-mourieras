import styled from '@emotion/styled';
import { Post } from '../../models/Post';
import ListItem from '../ListItem';
import { createFakeUser } from '../../services/createFakeUsers';

type Props = {
  post: Post;
  onClick?: () => void;
};

const PostDisplay = ({ post, onClick }: Props) => {
  const user = createFakeUser(1);
  return (
    <PostContainer onClick={onClick}>
      <ListItem firstName={user[0].firstName} lastName={user[0].lastName} avatar={user[0].avatar} />
      <img src={post.photo} />
      <PostTitle>{post.title}</PostTitle>
      <Postdesciption>{post.description}</Postdesciption>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  margin: 2rem;
`;

const PostTitle = styled.span`
  text-align: left;
  font-weight: bold;
`;
const Postdesciption = styled.span`
  text-align: left;
`;

export default PostDisplay;
