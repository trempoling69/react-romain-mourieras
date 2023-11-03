import { createFakePost } from '../services/createFakePost';
import styled from '@emotion/styled';
import { useState, useMemo } from 'react';
import PostDisplay from '../component/PostDisplay';
import Button from '../component/Button';
import TextField from '../component/Form/TextField';
import Loading from '../component/Loading';
import { usePost } from '../hooks/usePosts';

const PostView = () => {
  const { posts, loading, setPosts } = usePost();
  const [searchText, setSearchText] = useState('');

  const findPost = useMemo(() => {
    if (!searchText) return posts;
    return posts.filter((post) => post.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }, [searchText, posts]);

  const deletePost = (id: number) => {
    const newPostArray = posts.filter((post) => post.id !== id);
    setPosts(newPostArray);
  };

  const createPost = () => {
    const newPost = createFakePost(1);
    setPosts([...newPost, ...posts]);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <MainContainer>
      <SearchContainer>
        <TextField onChange={(e) => setSearchText(e.target.value)} placeholder="chercher par titre" />
      </SearchContainer>
      <Button onClick={createPost}>Publier</Button>
      {findPost.map((post) => (
        <PostDisplay key={post.id} post={post} onClick={() => deletePost(post.id)} />
      ))}
    </MainContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default PostView;
