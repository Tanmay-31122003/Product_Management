import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "products",
        component: HomeComponent
    },
    {
        path: "product/:id",
        component:ProductDetailComponent
    },
];
