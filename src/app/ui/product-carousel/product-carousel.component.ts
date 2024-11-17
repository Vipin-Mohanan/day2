import { ApplicationModule, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../../api.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Title } from '@angular/platform-browser';
import { products } from '../../interface/interface';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [RouterModule, ApplicationModule, CarouselModule, ProductCardComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss'
})

export class ProductCarouselComponent {

  constructor(public api:ApiService)
  {

  }
  product: any =
    {
      id: 0,
      title: "",
      price: " ",
      description: "",
      category: "",
      image: "",
      rating:
      {
        rate: 0,
        count: 0
      }
  }
  categories:any=[]

  @Input() cat:any=[]

  ngOnInit(){
    this.api.getCategoryById(this.cat).subscribe((res:any)=>{
      this.product=res
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }







}
