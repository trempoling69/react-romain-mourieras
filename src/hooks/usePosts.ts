import { useEffect, useState } from 'react';
import { Post } from '../models/Post';
import { fetchPosts } from '../services/posts/api';
import { transformPost } from '../services/posts/utils';

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetchPosts();
      const transformed = result.posts.map(transformPost);
      setPosts(transformed);
      setLoading(false);
    })();
  }, []);

  return { posts, loading, setPosts };
};
