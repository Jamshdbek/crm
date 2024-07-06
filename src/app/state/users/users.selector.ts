import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCounterState = (state: AppState) => state.counter;
export const selectUsersState = (state: AppState) => state.users;

export const selectCont = createSelector(selectCounterState, (state) => {
  return state.count;
});

export const selectUsersData = createSelector(selectUsersState, (state) => {
  return state.data;
});
