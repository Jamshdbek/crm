import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUsersState = (state: AppState) => state.users;

export const selectUsersData = createSelector(selectUsersState, (state) => {
  return state.data;
});
