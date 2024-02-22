import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './features/products/components/products-list/products-list.component';
import { CartComponent } from './features/cart/components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, 
  { path: 'products', component: ProductsListComponent }, 
  { path: 'cart', component: CartComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
