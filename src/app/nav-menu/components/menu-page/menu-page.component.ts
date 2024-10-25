import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    NgClass
  ],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {
  @Input() itemName: string = '';
  @Input() icon: string = '';
  @Input() menuIsCollapsed: boolean = true;
  @Input() route: string = '/';

  accessPage() {
    alert(this.route);
  }
}
