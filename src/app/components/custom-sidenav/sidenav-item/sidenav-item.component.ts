import {Component, Input, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatListItemIcon, MatListItemTitle} from '@angular/material/list';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidenav-item',
  standalone: true,
  imports: [
    MatIcon,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    NgForOf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss'
})
export class SidenavItemComponent {
  @Input() icon: string = '';
  @Input() label: string = '';

  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
    console.log(this.sidenavCollapsed());
  }
}
