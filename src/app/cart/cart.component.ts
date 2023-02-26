import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: Product[] = [];

  totalPrice: number | string = '';
  productCount: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  selectedItem = '';
  constructor(private cartService: CartService, private route: Router) { }


  ngOnInit(): void {
    this.cartItems = this.cartService.getCartProduct();
    this.totalPrice = this.cartService.getCartTotalPrice();


  }
  oncheckout(value: any) {
    this.cartService.clearCart();
    alert("Payment Successful")
    this.route.navigate(['/'])
  }


  deleteItem(id: number) {
    const storageProducts = this.cartService.getCartProduct();
    const products = storageProducts.filter((product: Product) => product.id !== id);
    localStorage.removeItem('products');
    try {
      localStorage.setItem('products', JSON.stringify(products));
      alert("Product removed successfully")
    } catch (e) {
      console.error('Error setting cart products in local storage', e);
    }
    this.calculateTotal()
  }
  selectChange(value: string, product: Product): void {
    const index = this.cartItems.findIndex(p => p.id === product.id);
    const newCartProducts = this.cartItems.map(p => {
      if (p.id === product.id) {
        return { ...p, amount: value };
      }
      return p;
    });
    localStorage.setItem('products', JSON.stringify(newCartProducts));
    this.cartItems = newCartProducts;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((acc, item) => {
      this.totalPrice = parseFloat(
        (acc + item.price * Number(item.amount)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }

  clearcart(): void {
    this.cartService.clearCart();
    this.calculateTotal();
  }

  // Users Checkout on submit
  checkoutuser(user: any): void {
    this.cartService.clearCart()
    this.route.navigate(['success'])

  }
}
