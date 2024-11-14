import { CanActivateFn, Router } from '@angular/router';
import { Helper } from '../helper';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem(Helper.lStorageToken);
  if (token != null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
