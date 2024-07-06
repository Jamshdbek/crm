import { createReducer, on } from '@ngrx/store';
import { deleteUser, editUser } from './users.action';
import { initialState } from './users.state';
import { UserItem } from '../../shared/types/users.type';

const _counterReducer = createReducer(
  initialState,
//   on(deleteUser, (state, action) => ({
//     ...state,
//     data: state.data.filter((item: UserItem) => item.id !== action.id),
//   })),
//   on(editUser, (state) => ({ ...state, count: state.count - 1 }))
);

export function usersReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
