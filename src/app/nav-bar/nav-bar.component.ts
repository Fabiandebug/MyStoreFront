import { Component } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  pageTitle: string = 'My Store';
  cartProductList!: Product[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProduct();
    this.calculate(this.cartProductList);
  }

  calculate(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    const ele = document.getElementById('cartAmount') as HTMLElement;
    ele.innerHTML = sum.toString();
  }


}
