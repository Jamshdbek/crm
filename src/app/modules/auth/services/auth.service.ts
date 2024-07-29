import { HttpClient } from '@angular/common/http';
import { Inject, inject } from '@angular/core';

@Inject({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  login: (payload: { email: string; password: string }) => void = () => {
    // alert("click")
    return this.http.post('/login', {});
  };
}
