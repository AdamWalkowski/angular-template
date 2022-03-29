import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getCartPrice() {
    const price = this.items.reduce((sum: number, product: Product) => {
      return sum + product.price;
    }, 0);

    return price;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
