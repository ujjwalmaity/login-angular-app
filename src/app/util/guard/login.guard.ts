import { CanActivateFn, Router } from '@angular/router';
import { Helper } from '../helper';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const isLogedIn: boolean = Helper.isUserLoggedIn();

  if (isLogedIn == true) {
    const router = inject(Router);
    router.navigateByUrl('');
  }

  return isLogedIn;
};
