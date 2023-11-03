export const fetchPosts = async () => {
  const result = await fetch('https://dummyjson.com/post');
  const json = await result.json();
  return json;
};
