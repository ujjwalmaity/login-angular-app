import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../model/login';
import { LoginService } from '../../service/login.service';
import { LoginResponse } from '../../model/login-response';
import { ErrorResponse } from '../../model/error-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  loginObj!: Login;
  errorResponse?: ErrorResponse;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginId: '',
      password: '',
      dob: '',
    });
  }

  doLogin(): void {
    // debugger;
    this.loginObj = this.loginForm.value;
    console.log(this.loginObj);

    if (this.loginObj.loginId.length == 0 ||
      this.loginObj.password.length == 0 ||
      this.loginObj.dob.length == 0
    ) {
      console.warn('Invalid input');
      return;
    }

    this.loginService.doLogin(this.loginObj)
      .subscribe({
        next: (res: LoginResponse) => {
          this.errorResponse = undefined;
          this.router.navigateByUrl('');
        },
        error: (errorRes: ErrorResponse) => {
          this.errorResponse = errorRes;
        }
      });
  }

}
