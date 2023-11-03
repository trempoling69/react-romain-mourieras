type Params = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

export const transformUser = ({ id, firstName, lastName, image }: Params) => ({
  id,
  firstName,
  lastName,
  avatar: image,
});
