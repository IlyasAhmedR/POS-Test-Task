import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  onImageError(event: any): void {
    event.target.src = 'https://placehold.co/600x400'; 
  }
}
