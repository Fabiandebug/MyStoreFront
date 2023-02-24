import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storage = window.localStorage;

  constructor() { }

  addToCart(product: Product): void {
    const products = this.getCartProduct();
    products.push(product);
    this.storage.setItem('products', JSON.stringify(products));
  }


  getCartProduct(): Product[] {
    const getProduct = this.storage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }

  clearCart(): void {
    this.storage.clear();
  }

  getCartProductCount(): number {
    const products = this.getCartProduct();
    return products.length;
  }

  getCartTotalPrice(): number {
    const products = this.getCartProduct();
    return products.reduce((acc, p) => acc + p.price, 0);
  }
}
