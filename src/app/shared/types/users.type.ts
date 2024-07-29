export interface UserItem {
  name: string;
  img: string;
  email: string;
  status: string;
  role: string;
}

export interface UsersDataState {
  data: Array<UserItem>;
}
