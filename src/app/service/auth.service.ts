import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _http: HttpClient) {}
  public getUsers(): Observable<any>{
    return this._http.get('/users')
  }
}
