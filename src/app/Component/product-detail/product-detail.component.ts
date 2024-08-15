import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/Product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  router=inject(Router)
  toastrService=inject(ToastrService);
  product!:Product
  constructor(public productService : ProductService){}
  activatedRoute=inject(ActivatedRoute);
  ngOnInit(){
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(productId).subscribe(result=>{
      this.product=result;
    })
  }

  delete(id:number){
    const ok=confirm("Are you sure want to delete product");
    if(ok){
      this.productService.deleteProduct(id).subscribe(result=>{
        this.toastrService.success("Delete succesfully...")
        this.router.navigateByUrl("/");
      })
    }
  }

}
