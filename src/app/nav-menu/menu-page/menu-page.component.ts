import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {
  @Input() itemName: string = '';
  @Input() icon: string = '';
}
