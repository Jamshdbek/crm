import { Component } from '@angular/core';
import { UserTableComponent } from '../../shared/ui/user-table/user-table.component';
import { statistic } from '../../shared/constants/menu';
import { StatisticsType } from '../../shared/types/global';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  statisticData: StatisticsType[] = statistic;
}
