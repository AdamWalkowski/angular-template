import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

type Shipping = {
  type: string;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<Shipping[]>('../assets/shipping.json');
  }
}
