import { Component } from '@angular/core';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {MenuPageComponent} from './components/menu-page/menu-page.component';
import {NgForOf} from '@angular/common';
import {MenuPage} from './components/menu-page/menu-page';

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
  username: string = 'Janete Maria Salvagni';
  isCollapsed: boolean = true;

  menuPages = [
    new MenuPage('Início', 'home', '/'),
    new MenuPage('Estoque', 'diamond', '/stock'),
    new MenuPage('Clientes', 'person', '/customers'),
    new MenuPage('Configurações', 'settings', '/settings'),
  ];

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
