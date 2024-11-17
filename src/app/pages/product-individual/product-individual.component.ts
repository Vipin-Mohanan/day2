import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { products } from '../../interface/interface';

@Component({
  selector: 'app-product-individual',
  standalone: true,
  imports: [],
  templateUrl: './product-individual.component.html',
  styleUrl: './product-individual.component.scss'
})
export class ProductIndividualComponent {
  constructor(private router_id: ActivatedRoute, private api:ApiService){
  }

  data:products={
    id: 0,
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
    rating: {
      rate: 0,
      count: 0
    }
  }

  rate:number=0
  sum:number=0
  fullstar:number=0
  halfstar:number=0

  ngOnInit(){
    let id = this.router_id.snapshot.paramMap.get("id");
    console.log(id);

    this.api.getProductById(id!).subscribe((res:any)=>{
        this.data=res;
        this.rate = this.data.rating.rate
        this.sum = this.rate*10
        this.fullstar = parseInt(this.rate.toString())
        this.halfstar= this.sum%10
    })





  }
}
