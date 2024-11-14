import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const cloneReq = req.clone({
    setHeaders: {
      deviceId: 'ABC',
      ipAddress: '192.168.0.1'
    }
  });
  return next(cloneReq);
};
