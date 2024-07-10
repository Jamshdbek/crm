import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '../../shared/constants/path';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  private router = inject(Router);
  login(): void {
    this.router.navigate([""]);
  }
}
