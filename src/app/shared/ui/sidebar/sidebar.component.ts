import { Component, Input } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { menu } from '../../constants/menu';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ProfileComponent, MenuCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuData = menu;
}
