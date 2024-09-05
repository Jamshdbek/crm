import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthFieldTypes } from '../../../shared/types/auth';

export class AuthService {
  http: HttpClient = inject(HttpClient);
  login(payload: UserAuthFieldTypes): Observable<any> {
    return this.http.post('/login', payload);
  }
  register(payload: UserAuthFieldTypes): Observable<any> {
    return this.http.post('/register', payload);
  }
}
