import { createReducer, on } from '@ngrx/store';
import { deleteUser, editUser } from './users.action';
import { initialState } from './users.state';
import { UserItem } from '../../shared/types/users.type';

const _counterReducer = createReducer(
  initialState,
  on(deleteUser, (state, action) => ({
    ...state,
    data: state.data.filter((item: UserItem) => item.email !== action.email),
  })),
  on(editUser, (state, action) => ({
    ...state,
    data: state.data.map((item: UserItem) =>
      item.email === action?.email ? { ...item, name: action?.name } : item
    ),
  }))
);
export function usersReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
