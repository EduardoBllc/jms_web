import { Component } from '@angular/core';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    MenuHeaderComponent,
    MenuPageComponent,
    NgForOf
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  menuPages = [
    { name: 'Início', icon: 'home' },
    { name: 'Estoque', icon: 'diamond' },
    { name: 'Clientes', icon: 'person' },
    { name: 'Configurações', icon: 'settings' }
  ];
}
