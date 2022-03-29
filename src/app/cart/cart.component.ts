import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.items = this.cartService.clearCart();
    const values: {
      name: string;
      address: string;
    } = this.checkoutForm.value;
    window.alert(
      `Your order has been submitted\n ${values.name} ${values.address}`
    );
    this.checkoutForm.reset();
  }
}
