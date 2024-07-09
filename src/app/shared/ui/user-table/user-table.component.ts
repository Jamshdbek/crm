import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserCardComponent } from '../user-card/user-card.component';
export interface PeriodicElement {
  name: string;
  img: string;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    img: 'assets/user-images/user-1.svg',
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
  },
  {
    img: 'assets/user-images/user-2.svg',
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
  },
  {
    img: 'assets/user-images/user-3.svg',
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
  },
  {
    img: 'assets/user-images/user-4.svg',
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
  },
  {
    img: 'assets/user-images/user-5.svg',
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
  },
  {
    img: 'assets/user-images/user-6.svg',
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
  },
  {
    img: 'assets/user-images/user-7.svg',
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
  },
  {
    img: 'assets/user-images/user-8.svg',
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
  },
  {
    img: 'assets/user-images/user-9.svg',
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
  },
];
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
  displayedColumns: string[] = ['img', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //  sort details
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

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
