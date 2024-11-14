import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { Helper } from '../helper';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isLogedIn: boolean = Helper.isUserLoggedIn();

  if (isLogedIn == false) {
    const router = inject(Router);
    router.navigateByUrl('/login');
  }

  return isLogedIn;
};

export const authGuardChild: CanActivateChildFn = (childRoute, state) => {
  const isLogedIn: boolean = Helper.isUserLoggedIn();

  if (isLogedIn == false) {
    const router = inject(Router);
    router.navigateByUrl('/login');
  }

  return isLogedIn;
};
