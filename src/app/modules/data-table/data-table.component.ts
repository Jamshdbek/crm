import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { UserTableComponent } from '../../shared/ui/user-table/user-table.component';
import { statistic } from '../../shared/constants/menu';
import { StatisticsType } from '../../shared/types/global';
import { Observable, filter } from 'rxjs';
import { UserItem } from '../../shared/types/users.type';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectUsersData } from '../../state/users/users.selector';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { deleteUser } from '../../state/users/users.action';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [UserTableComponent, CommonModule, SearchComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  public statisticData: StatisticsType[] = statistic;
  public usersData: Observable<any> = this.store.select(selectUsersData);
  public usersCount = signal<number>(0);

  searchText: string = '';

  userDeleteId(email: string) {
    this.store.dispatch(deleteUser({ email }));
  }
  constructor(private store: Store<AppState>) {
    effect(() => {
      console.log(this.userDeleteId, 'user');
    });
  }
  // make to uppercase search text and use INCLUDES
  setSearchText(value: string) {
    this.usersData.pipe(filter((item) => item.name === value));
    this.searchText = value;
  }
  ngOnInit(): void {
    if (this.usersData) {
      this.usersData.subscribe((data) => {
        this.usersCount.set(data.length);
      });
    }
  }
}
