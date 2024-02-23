import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDTO } from '../DTOs/ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  _state = new BehaviorSubject<ProductDTO[]>([]);
  private stateData: ProductDTO[] = [];
  constructor() {
    if (this.stateData == undefined || this.stateData == null || this.stateData.length < 1) {
      this.stateData = this.getProducts();
      this.SyncData();
    }
  }

  // Cart Handlers 
  AddProductToCart(product: ProductDTO): void {
    if (this.stateData.map(x => x.id).includes(product.id)) {
      let indexToUpdate = this.getIndexById(product.id == null ? 1 : product.id);
      let qty = this.stateData[indexToUpdate].quantity;
      this.stateData[indexToUpdate].quantity = (qty == undefined ? 0 : qty) + 1;
      this.SyncData();
    } else {
      product["quantity"] = 1;
      this.stateData.push(product)
      this.SyncData();

    }
  }

  private getIndexById(productId: number): number {
    return this.stateData.findIndex((product) => product.id === productId);
  }


  /// SyncData 
  private SyncData(): void {
    this._state.next(this.stateData);
    this.saveProducts(this.stateData);
  }


  /// LocalStorageHandller   
  private readonly STORAGE_KEY = 'products';

  // Get products from local storage
  private getProducts(): ProductDTO[] {
    const storedProducts = localStorage.getItem(this.STORAGE_KEY);

    return storedProducts ? JSON.parse(storedProducts) : [];
  }

  // Save products to local storage
  private saveProducts(products: ProductDTO[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
  }

  /// LocalStorageHandller   
}
