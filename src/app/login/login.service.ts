import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable,pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login({username, password}: {username:string, password:string}): Observable<boolean> {

    return this.http.post<boolean>('login', {
      username,
      password
    });
  }
}
