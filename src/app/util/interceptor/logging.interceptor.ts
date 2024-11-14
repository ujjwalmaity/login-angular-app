import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  return next(req)
    .pipe(tap((event) => {
      if (event.type == HttpEventType.Response) {
        console.log(event.body);
      }
    }))
    .pipe(catchError(error => {
      console.error(error);
      return throwError(() => error);
    }));
};
