import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UserCardComponent } from './shared/ui/user-card/user-card.component';
import { UserTableComponent } from './shared/ui/user-table/user-table.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    UserCardComponent,
    UserTableComponent,
    LayoutComponent,
  ],
  styleUrl: './app.component.css',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
