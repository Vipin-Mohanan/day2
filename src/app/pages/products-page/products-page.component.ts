import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ProductCardComponent } from "../../ui/product-card/product-card.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductCarouselComponent } from "../../ui/product-carousel/product-carousel.component";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCardComponent, ProductCarouselComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  constructor(public api:ApiService)
  {

  }

  categories:any=[]


  ngOnInit(){
    this.api.getCategories().subscribe((res:any)=>{
      this.categories=res
      console.log(this.categories);
    })
  }

}
