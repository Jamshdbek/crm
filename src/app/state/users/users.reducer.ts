import { createReducer, on } from '@ngrx/store';
import { deleteUser } from './users.action';
import { initialState } from './users.state';
import { UserItem } from '../../shared/types/users.type';

// const _counterReducer = createReducer(
//   initialState
//     on(deleteUser, (state) => ({
//       ...state,
//       data: state.data.filter((item: UserItem) => item.email = "Johnson"),
//     }))
//   //   on(editUser, (state) => ({ ...state, count: state.count - 1 }))
// );

const _counterReducer = createReducer(
  initialState,
  on(deleteUser, (state, action) => ({
    ...state,
    data: state.data.filter((item: UserItem) => item.email !== action.email),
  }))
);
export function usersReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
