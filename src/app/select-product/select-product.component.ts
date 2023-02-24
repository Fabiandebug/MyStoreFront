import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent {
  private ngUnsubscribe = new Subject<void>();
  product!: Product;
  products!: Product[];
  quantity: number = 1;
  id!: number;
  productCount: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  selectedItem = '1';
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.ProductService.getProducts().subscribe(res => {
      if (res.length > 0) {
        this.products = res;
        this.product = this.getProductDetails(this.id);
      } else {
        console.log("No products found.");
      }

    });
  }

  getProductDetails(id: any) {
    return this.products.filter((item) => item.id === id)[0];
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }

  addToCart(product: Product): boolean {
    try {
      const cartProducts: Product[] = this.products;
      let productInCart = cartProducts.find((ele) => ele.id === product.id);
      if (productInCart) {
        productInCart.amount = this.selectedItem;
      } else {
        cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
      }
      localStorage.setItem('products', JSON.stringify(cartProducts));
      alert(`${product.name} has been added to your cart.`);
      return true;
    } catch (error) {
      console.error('Error while adding product to cart:', error);
      alert(`Failed to add ${product.name} to your cart.`);
      return false;
    }
  }

}


