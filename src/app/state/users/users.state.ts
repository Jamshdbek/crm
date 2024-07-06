import { UsersDataState } from '../../shared/types/users.type';
export const initialState: UsersDataState = {
  data: [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      status: 'Free',
      role: 'Reporter',
      photo: '',
    },
    {
      id: 2,
      name: 'Komil',
      email: 'komil@gmail.com',
      status: 'anger',
      role: 'Drector',
      photo: '',
    },
  ],
};
