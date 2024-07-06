import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
// import { CounterComponent } from './counter/counter.component';
import { UserCardComponent } from './shared/ui/user-card/user-card.component';
import { UserTableComponent } from './shared/ui/user-table/user-table.component';
import { LayoutComponent } from './layout/layout.component';
// import { AppModule } from './app.module';
// import { CounterComponent } from './state/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    // CounterComponent,
    UserCardComponent,
    UserTableComponent,
    LayoutComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crm';
}
