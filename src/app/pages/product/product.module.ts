import { NgModule } from '@angular/core';
import { productRoutingModule } from './product-routing.module';
import { productComponent } from './product.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [productRoutingModule, NzTableModule, NzDividerModule , CommonModule],
  declarations: [productComponent, CartComponent],
  exports: [productComponent]
})
export class productModule { }
