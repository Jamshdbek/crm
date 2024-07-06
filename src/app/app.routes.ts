import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DataTableComponent } from './modules/data-table/data-table.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { Path } from './shared/constants/path';

export const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children: [
      {
        path: Path.DATA_TABLE,
        component: DataTableComponent,
      },
    ],
  },
  {
    path: Path.LOGIN,
    component: LoginPageComponent,
  },
];
