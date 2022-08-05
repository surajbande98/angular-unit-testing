import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('LoginService', () => {
  let loginService: LoginService;
  let http: HttpClient, httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    loginService = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('Service created', () => {
    expect(loginService).toBeTruthy();
  });

  it('call login()', () => {
    const testData = true;
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    loginService
      .login(inputData)
      .subscribe((data) => expect(data).toEqual(testData));

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  });

  it('call login() failed', () => {
    const emsg = 'status 500 error';
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    loginService.login(inputData).subscribe({
      next: () => fail('should have failed with the 500 error'),
      error: (error) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }});

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');

    req.flush(emsg, { status: 500, statusText: 'Server Error' });
  });
});
