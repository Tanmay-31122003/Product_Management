import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/Product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  productService=inject(ProductService);
  router=inject(Router)

  product:Product={
    Name:"",
    Brand:"",
    image:"",
    currentPrice:0,
    standardPrice:0,
    discount:''
  }

  addProduct(){
    console.log("Form Submitted...",this.product);
    this.productService.addProduct(this.product).subscribe(result=>{
       alert("Product Saved");
       this.router.navigateByUrl("/");
    })
  }
}
