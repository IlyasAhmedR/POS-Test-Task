import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productComponent } from './product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo:'products' },
  { path: 'products', component: productComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productRoutingModule { }
