import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DataTableComponent } from './modules/data-table/data-table.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { Path } from './shared/constants/path';
import { canActivateAuth } from './modules/auth/access.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DataTableComponent,
      },
    ],
    canActivate: [canActivateAuth],
  },
  {
    path: Path.LOGIN,
    component: LoginPageComponent,
  },
];
