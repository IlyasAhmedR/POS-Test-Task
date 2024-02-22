import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
