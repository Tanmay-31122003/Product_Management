import { Component, inject, Inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrected from styleUrl to styleUrls
})
export class HomeComponent implements OnInit { // Added implements OnInit
  public products : Product[] = [];
  filteredProduct: Product[] = []; 
  constructor(private productService: ProductService){}

  router = inject(Router)

  ngOnInit() {
    this.productService.getProducts().subscribe((result)=>{
      console.log(result);
      this.products=result;
      this.filteredProduct = this.products;
    })
    
  }

  onSearch(Search: string) {
    console.log("Home", Search);
    if (Search) {
      this.filteredProduct = this.products.filter(x => x.Name.toLowerCase().includes(Search.toLowerCase()));
    } else {
      this.filteredProduct = this.products;
    }
  }

  onViewProduct(event: any) {
    console.log("onViewProduct:", event); 
    this.router.navigateByUrl("/product/"+event);
  }
}
