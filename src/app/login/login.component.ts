import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    if (!(!!this.username && !!this.password)) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.loginService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res) => this.handleResponse(res),
        error: (error: Error) => this.handleError(error),
      });
  }

  handleResponse(res: boolean) {
    if (res) {
      this.router.navigateByUrl('/home');
    } else {
      this.errorMessage = 'Invalid Login';
    }
  }

  handleError(error: any) {
    this.errorMessage = "Login Failed";
  }
}
