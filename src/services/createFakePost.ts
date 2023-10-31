import { faker } from '@faker-js/faker';
import { Post } from '../models/Post';

export const createFakePost = (count: number): Post[] => {
  return Array.from(Array(count).keys()).map((id) => ({
    id: new Date().getTime() + id,
    description: faker.lorem.sentence(),
    photo: faker.image.urlPicsumPhotos(),
    title: faker.lorem.slug(),
  }));
};
