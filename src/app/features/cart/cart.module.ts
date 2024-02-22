import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module'; // Make sure this import path is correct

@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    CartRoutingModule 
  ]
})
export class CartModule { }
