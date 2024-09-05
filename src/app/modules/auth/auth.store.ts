import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { inject } from '@angular/core';
import { exhaustMap, pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserAuthFieldTypes } from '../../shared/types/auth';
import { initialUserValue } from '../../shared/constants/auth.model';
import { AuthService } from './services/auth.service';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<any>(initialUserValue),
  withMethods(
    (
      store,
      reduxStore = inject(Store),
      authService = inject(AuthService),
      router = inject(Router)
    ) => ({
      login: rxMethod<UserAuthFieldTypes>(
        pipe(
          exhaustMap((credentials) =>
            authService.login(credentials).pipe(
              tapResponse({
                next: (res) => {
                  patchState(store, {
                    user: res.data.user,
                    loggedIn: true,
                  });
                  localStorage.setItem('token', res.data.token);
                  router.navigateByUrl('/');
                },
                error: ({ error }) => patchState(store, { error }),
              })
            )
          )
        )
      ),
      register: rxMethod<any>(
        pipe(
          exhaustMap((newUserData) =>
            authService.register(newUserData).pipe(
              tapResponse({
                next: (res) => {
                  patchState(store, {
                    user: res.data.user,
                    loggedIn: true,
                  });
                  localStorage.setItem('token', res.data.token);
                  router.navigateByUrl('/');
                },
                error: ({ error }) => patchState(store, { error }),
              })
            )
          )
        )
      ),
    })
  )
);
