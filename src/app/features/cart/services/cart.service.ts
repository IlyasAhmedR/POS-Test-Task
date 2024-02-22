import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; 

  constructor() { }

  addToCart(product: any): void { 
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getCartItems(): any[] { 
    const items = localStorage.getItem('cart');
    return items ? JSON.parse(items) : [];
  }
}
