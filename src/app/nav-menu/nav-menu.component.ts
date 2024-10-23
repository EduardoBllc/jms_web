import { Component } from '@angular/core';
import {NavMenuHeaderComponent} from './nav-menu-header/nav-menu-header.component';
import {NavMenuPageComponent} from './nav-menu-page/nav-menu-page.component';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NavMenuHeaderComponent,
    NavMenuPageComponent
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

}
