import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product?: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find((x: Product) => x.id === productId);
  }
}
