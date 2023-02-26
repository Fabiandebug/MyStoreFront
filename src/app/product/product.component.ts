import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Product } from '../models/products';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  Tile: String = "Sale Products"
  products: Product[] = []
  selectedItem = '1';
  productCount: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  cartProducts: Product[] = [];

  // Dependacy injection
  constructor(private ProductService: ProductService,
    private CartService: CartService) { }
  // Get products on initialization


  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(res => {
      if (res.length > 0) {
        this.products = res;
      } else {
        console.log("No products found.");
      }
    });
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }

  addToCart(product: Product): boolean {
    try {
      let productInCart = this.cartProducts.find((ele: { id: number; }) => ele.id === product.id);
      if (productInCart) {
        productInCart.amount = this.selectedItem;
      } else {
        this.cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
      }
      localStorage.setItem('products', JSON.stringify(this.cartProducts));
      alert(`${product.name} has been added to your cart.`);
      return true;
    } catch (error) {
      console.error('Error while adding product to cart:', error);
      alert(`Failed to add ${product.name} to your cart.`);
      return false;
    }
  }
}
