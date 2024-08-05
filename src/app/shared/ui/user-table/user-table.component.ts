import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  signal,
  inject,
} from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserCardComponent } from '../user-card/user-card.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { Observable } from 'rxjs';
import { UserItem } from '../../types/users.type';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from './components/dialog/dialog.component';
@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    AsyncPipe,
    UserCardComponent,
    MatTableModule,
    MatSortModule,
    CommonModule,
    // modal
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'], // Make sure this is correct
})
export class UserTableComponent implements OnChanges {
  public displayedColumns: string[] = ['name', 'email', 'status', 'role'];

  // modal dialog
  readonly data = signal('');
  readonly dialog = inject(MatDialog);

  // end modal dialog
  @Input() usersData: Observable<UserItem[]> = new Observable<UserItem[]>();

  @Output() userDeleteId: EventEmitter<string> = new EventEmitter<string>();

  //  sourse controllers
  public dataSource = new MatTableDataSource<UserItem>();

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  deleteUserByEmail(email: string) {
    // get user email
    if (email) {
      this.userDeleteId.emit(email);
    }
  }

  // modal deal with
  openDialog(data: UserItem): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      backdropClass: 'custom-dialog-backdrop',
      panelClass: 'custom-dialog',
      data: { userData: data },
    });

    // change data
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.data.set(result);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['usersData']) {
      this.usersData?.subscribe((data) => {
        this.dataSource.data = data;
      });
    }
  }

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
