import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/DTOs/ProductDTO';
import { ChartService } from 'src/app/Services/chart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listOfData: ProductDTO[] = [];

  constructor(private cartService: ChartService) {

  }
  ngOnInit(): void {
    this.cartService._state.subscribe(x => {
      this.listOfData = x;
      console.log(this.listOfData);
    })
  }



}
