export interface UserItem {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  photo: string;
}

export interface UsersDataState {
  data: Array<UserItem>;
}
