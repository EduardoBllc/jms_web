import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {ActionButton} from "../../components/actions-button/action-button";
import {ActionsButtonComponent} from "../../components/actions-button/actions-button.component";
import {NgForOf} from "@angular/common";
import {Product} from "./product";
import {ProductListItemComponent} from "./components/product-list-item/product-list-item.component";
import {CardItem} from "../../components/card-item/card-item";
import {CardItemComponent} from "../../components/card-item/card-item.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    ActionsButtonComponent,
    NgForOf,
    ProductListItemComponent,
    CardItemComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  actionsList: ActionButton[] = [
    { route: "products", label: "Cadastrar", icon: "add" },
    { route: "products", label: "Cadastrar Lote", icon: "box_add" },
    { route: "products", label: "Consultar", icon: "search" },
  ];

  lastAquiredProducts: Product[] = [
    { id: 1, description: "Peça 1", price: 226 },
    { id: 2, description: "Peça 2", price: 162 },
    { id: 3, description: "Peça 3", price: 275 },
    { id: 4, description: "Peça 4", price: 20 },
    { id: 5, description: "Peça 5", price: 65 }
  ];

  olderProducts: Product[] = [
    { id: 24, description: "Peça 24", price: 667 },
    { id: 19, description: "Peça 19", price: 213 },
    { id: 15, description: "Peça 15", price: 314 },
    { id: 10, description: "Peça 10", price: 25 },
    { id: 9, description: "Peça 9", price: 37 }
  ];

  cardItems: CardItem[] = [
    { label: 'Qtd', value: 73, sufix: 'pc', size: 3 },
    { label: 'Valor', value: 12534.80, size: 5, monetary: true, },
    { label: 'Preço Médio', value: 173.52, size: 4, monetary: true, },
  ]
}
