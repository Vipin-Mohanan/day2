import { Component, Input } from '@angular/core';
import { products } from '../../interface/interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() data:products={
  id:1,
  title: "",
  price: "",
  description: "",
  image: "",
  category:" ",
  rating:
      {
        rate: 0,
        count: 0
      }
  }
 @Input() buttonTitle:string="Know more"
}
