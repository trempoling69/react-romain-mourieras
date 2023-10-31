import { faker } from '@faker-js/faker';
import { User } from '../models/User';

export const createFakeUser = (count: number): User[] => {
  return Array.from(Array(count).keys()).map((id) => ({
    id: new Date().getTime() + id,
    avatar: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  }));
};
