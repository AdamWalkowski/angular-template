import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  cartPrice = this.cartService.getCartPrice();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
