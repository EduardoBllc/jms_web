import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    NgClass
  ],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss'
})
export class MenuHeaderComponent {
  @Input() username: string = '';
  displayedUsername: string = ''
  @Input() menuIsCollapsed: boolean = true;

  @Output() toggle = new EventEmitter<void>();

  onToggleMenu() {
    this.toggle.emit(); // Emite o evento para o componente pai
  }

  ngOnInit() {
    if (this.username.length > 15) {
      this.displayedUsername = this.username.substring(0, 12) + '...';
    }
  }
}
