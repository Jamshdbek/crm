import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { inject } from '@angular/core';
import { exhaustMap, pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserAuthFieldTypes } from '../../shared/types/auth';
import { initialUserValue } from '../../shared/constants/auth.model';
import { AuthService } from './services/auth.service';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<UserAuthFieldTypes>(initialUserValue),
  // withMethods(
  //   (
  //     store,
  //     reduxStore = inject(Store),
  //     authService = inject(AuthService),
  //     // localStorageService = inject(LocalStorageJwtService),
  //     router = inject(Router),
  //   ) => ({
      
  //     login: rxMethod<UserAuthFieldTypes>(
  //       pipe(
  //         exhaustMap((credentials) =>
  //           authService.login(credentials).pipe(
  //             tapResponse({
  //               next: ({ user }) => {
  //                 patchState(store, { user, loggedIn: true });
  //                 localStorageService.setItem(user.token);
  //                 router.navigateByUrl('/');
  //               },
  //               error: ({ error }) => reduxStore.dispatch(formsActions.setErrors({ errors: error.errors })),
  //             }),
  //           ),
  //         ),
  //       ),
  //     ),
  //     register: rxMethod<NewUser>(
  //       pipe(
  //         exhaustMap((newUserData) =>
  //           authService.register(newUserData).pipe(
  //             tapResponse({
  //               next: ({ user }) => {
  //                 patchState(store, { user, loggedIn: true });
  //                 localStorageService.setItem(user.token);
  //                 router.navigateByUrl('/');
  //               },
  //               error: ({ error }) => reduxStore.dispatch(formsActions.setErrors({ errors: error.errors })),
  //             }),
  //           ),
  //         ),
  //       ),
  //     ),
  //     updateUser: rxMethod<User>(
  //       pipe(
  //         exhaustMap((user) =>
  //           authService.update(user).pipe(
  //             tapResponse({
  //               next: ({ user }) => {
  //                 patchState(store, { user });
  //                 localStorageService.setItem(user.token);
  //                 router.navigate(['profile', user.username]);
  //               },
  //               error: ({ error }) => reduxStore.dispatch(formsActions.setErrors({ errors: error.errors })),
  //             }),
  //           ),
  //         ),
  //       ),
  //     ),
  //     logout: () => {
  //       patchState(store, { user: initialUserValue, loggedIn: false });
  //       localStorageService.removeItem();
  //       router.navigateByUrl('login');
  //     },
  //   }),
  // ),
  // withCallState({ collection: 'getUser' }),
);
