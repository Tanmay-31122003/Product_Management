import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/Product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  productService=inject(ProductService)
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);
  toastrService=inject(ToastrService);
  
  formBuilder=inject(FormBuilder)
  productForm:FormGroup=this.formBuilder.group({
    id:[''],
    Name:['',[Validators.required,Validators.minLength]],
    Brand:['',[Validators.required]],
    image:[''],
    currentPrice:[''],
    standardPrice:[''],
    discount:[''],
  })

  ngOnInit(){
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(productId).subscribe(result=>{
      this.productForm.patchValue(result);
    })
  }

  editProduct(){
    if(this.productForm.invalid){
      this.toastrService.error("Please fill out all field !!");
      return;
    }
    console.log("form Edited",this.productForm.value);
    this.productService.updateProduct(this.productForm.value).subscribe(result=>{
      this.toastrService.success("product Updated");
      this.router.navigateByUrl("/");
    })
  }
}
