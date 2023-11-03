export const fetchUsers = async () => {
  const result = await fetch('https://dummyjson.com/users');
  const json = await result.json();
  return json;
};
