import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
class LogoutInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    localStorage.clear();
                    this.router.navigateByUrl('/login');
                }
                return throwError(() => error);
            })
        );
    }

}

export const logoutInterceptorProvider: Provider =
    { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptor, multi: true };
