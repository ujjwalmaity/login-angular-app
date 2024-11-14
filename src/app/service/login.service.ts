import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Helper } from '../util/helper';
import { Login } from '../model/login';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { LoginResponse } from '../model/login-response';
import { ErrorResponse } from '../model/error-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  doLogin(login: Login): Observable<LoginResponse> {
    const body = {
      "loginId": login.loginId,
      "password": login.password,
      "dob": login.dob
    };
    return this.httpClient.post<LoginResponse>(Helper.urlLogin, body)
      .pipe(tap((res) => {
        if (res.httpStatus == 'OK') {
          localStorage.setItem(Helper.lStorageToken, res.data?.token ?? '');
        }
      }))
      .pipe(catchError((error: HttpErrorResponse) => {
        localStorage.removeItem(Helper.lStorageToken);
        return throwError(() => error.error as ErrorResponse);
      }));
  }

}
