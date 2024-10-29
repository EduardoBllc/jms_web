import {Component, Input} from '@angular/core';
import {CardItem} from "./card-item";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() declare cardItem: CardItem;
}
