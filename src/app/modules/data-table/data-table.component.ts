import { Component } from '@angular/core';
import { UserTableComponent } from '../../shared/ui/user-table/user-table.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {}
