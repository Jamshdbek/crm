import { Component, OnInit } from '@angular/core';
import { UserTableComponent } from '../../shared/ui/user-table/user-table.component';
import { statistic } from '../../shared/constants/menu';
import { StatisticsType } from '../../shared/types/global';
import { Observable } from 'rxjs';
import { UserItem } from '../../shared/types/users.type';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectUsersData } from '../../state/users/users.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [UserTableComponent, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  public statisticData: StatisticsType[] = statistic;
  public usersData$: Observable<any> = this.store.select(selectUsersData);
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.usersData$ = this.store.select(selectUsersData);
  }
}
