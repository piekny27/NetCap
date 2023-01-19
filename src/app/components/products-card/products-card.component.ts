import { Component, Input } from '@angular/core';
import { Laptop } from 'src/app/models/laptop/laptop.model';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent {
  @Input() laptop?: Laptop;
}
