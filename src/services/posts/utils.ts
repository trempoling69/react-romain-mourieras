import { faker } from "@faker-js/faker";

type Params = {
    id: number;
    title: string;
    body: string;
  };
  
  export const transformPost = ({ id, title, body }: Params) => ({
    id,
    title,
    description: body,
    photo: faker.image.urlPicsumPhotos(),
  });