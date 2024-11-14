import { HttpInterceptorFn } from '@angular/common/http';
import { Helper } from '../helper';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url != Helper.urlLogin) {
    const token = localStorage.getItem(Helper.lStorageToken);
    const cloneReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return next(cloneReq);
  }

  return next(req);
};
