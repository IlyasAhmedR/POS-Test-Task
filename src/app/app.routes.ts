// app.routes.ts
import { Routes } from '@angular/router';
import { ProductsListComponent } from './features/products/components/products-list/products-list.component';
import { CartComponent } from './features/cart/components/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'cart', component: CartComponent },
  // more routes can be added here
];

