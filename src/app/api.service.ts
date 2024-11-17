import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProduts(){
    return this.http.get("https://fakestoreapi.com/products")
  }

  getCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories")
  }

  getCategoryById(category:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }

  getProductById(id:string){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getPincodeData(pin: any) {

    return this.http.get('data/pincodes.json').pipe(
      map((data:any) => {
        // Filter the data based on the pincode
        const filteredData = data.filter((item:any) => item.pincode === Number( pin));
        return filteredData;


      })
    );
  }
}
