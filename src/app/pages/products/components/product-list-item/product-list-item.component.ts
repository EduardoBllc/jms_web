import {Component, Input} from '@angular/core';
import {Product} from "../../product";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() product: Product | undefined;
}
