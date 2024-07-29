import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserCardComponent } from '../user-card/user-card.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { Observable } from 'rxjs';
import { selectUsersData } from '../../../state/users/users.selector';
import { UserItem } from '../../types/users.type';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    AsyncPipe,
    UserCardComponent,
    MatTableModule,
    MatSortModule,
    CommonModule,
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  public displayedColumns: string[] = ['name', 'email', 'status', 'role'];
  private usersData$?: Observable<UserItem[]> =
    this.store.select(selectUsersData);
  public dataSource = new MatTableDataSource();
  //  sort details
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private store: Store<AppState>
  ) {
    console.log(this.usersData$, 'user this');
    this.usersData$?.subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
