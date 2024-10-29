import {Component, computed, Input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {SidenavItemComponent} from './sidenav-item/sidenav-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, CommonModule, MatIconModule, RouterModule, SidenavItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    {icon: 'dashboard', label: 'Dashboard', route: 'dashboard'},
    {icon: 'diamond', label: 'Products', route: 'products'},
    {icon: 'group', label: 'Customers', route: 'customers'},
  ]);

  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
    console.log(this.sidenavCollapsed());
  }

  profileImageSize = computed(() => this.sidenavCollapsed() ? '36' : '100');
}
