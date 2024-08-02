import { createAction, props } from '@ngrx/store';

export const deleteUser = createAction(
    '[Users Component] Delete',
    props<{ email: string }>()
  );
  
export const editUser = createAction('[Users Component] Edit');
