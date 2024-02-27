import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/DTOs/ProductDTO';
import { ChartService } from 'src/app/Services/chart.service';
import { ProductsService } from 'src/app/Services/products.service';


 
interface DataItem {
  title: string;
  price: number;
  description: number; 
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  listOfData: ProductDTO[] = [];

  listOfColumn = [
    {
      title: 'Image',
      compare:  null,
      priority: false
    },
    {
      title: 'Title',
      compare: (a: DataItem, b: DataItem) => a.title.localeCompare(b.title),
      priority: false
    },
    {
      title: 'Price',
      compare: (a: DataItem, b: DataItem) => a.price - b.price,
      priority: 3
    },
    {
      title: 'Description',
      compare: (a: DataItem, b: DataItem) => a.description - b.description,
      priority: 2
    },
    {
      title: 'Action',
      compare: null ,
      priority: 1
    }
  ];

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
