import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/DTOs/ProductDTO';
import { ChartService } from 'src/app/Services/chart.service';
import { ProductsService } from 'src/app/Services/products.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class productComponent implements OnInit {
  listOfData: ProductDTO[] = [];

  constructor(private productservice: ProductsService, private cartService: ChartService) {

  }
  ngOnInit(): void {
    this.productservice.getData().subscribe(x => {
      this.listOfData = x.products;
      console.log(this.listOfData);
    })
  }

  addtoCart(data: ProductDTO) {
    this.cartService.AddProductToCart(data);
  }
}
