import rawUsers from '../data/users.json';
import { User } from '../types/user';

const transformUser = (rawUser: any): User => ({
  ...rawUser,
  phoneNumber: rawUser.phoneNiumber || rawUser.phoneNumber,
  guarantorFullName: rawUser.guarantorFullname || rawUser.guarantorFullName
});

export const getUsers = (): Promise<User[]> => {
  const users = rawUsers.map(transformUser);
  return Promise.resolve(users);
};

export const getUserById = (id: string): Promise<User | undefined> => {
  const user = rawUsers.find(user => user.userId === id);
  return Promise.resolve(user ? transformUser(user) : undefined);
};