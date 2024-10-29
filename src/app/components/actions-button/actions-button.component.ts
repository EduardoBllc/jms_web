import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.scss'
})
export class ActionsButtonComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() route: string = '';
}
