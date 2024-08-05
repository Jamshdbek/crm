import { createAction, props } from '@ngrx/store';
import { UserItem } from '../../shared/types/users.type';

export const deleteUser = createAction(
  '[Users Component] Delete',
  props<{ email: string }>()
);

export const editUser = createAction(
  '[Users Component] Edit',
  props<UserItem>()
);
