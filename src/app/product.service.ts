import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient){}

  getProducts(){
    return this.httpClient.get<Product[]>("http://localhost:3000/products")
  }

  
}
