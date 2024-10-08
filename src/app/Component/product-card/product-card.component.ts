import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../types/Product';
import { RupeePipe } from '../../rupee.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,UpperCasePipe,LowerCasePipe,RupeePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!:Product;
  @Output() viewProduct = new EventEmitter<number>(); 

  view()
  {
    console.log("View Clicked");
    this.viewProduct.emit(this.product.id);
  }
}
