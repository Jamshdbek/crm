import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '../../shared/constants/path';

export const canActivateAuth = () => {
  const isLoginIn: boolean = true;
  if (isLoginIn) {
    // return inject(Router).createUrlTree([Path.DATA_TABLE]);
    return true
  }

  return inject(Router).createUrlTree([Path.LOGIN]);
};
