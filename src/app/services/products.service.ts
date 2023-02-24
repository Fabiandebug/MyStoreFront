import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:4200/assets/data.json';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  addProduct(product: Product): void {
    const products = this.getProductsFromStorage();
    products.push(product);
    this.saveProductsToStorage(products);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  private getProductsFromStorage(): Product[] {
    const productsJson = window.localStorage.getItem('products');
    if (productsJson) {
      return JSON.parse(productsJson) as Product[];
    } else {
      return [];
    }
  }

  private saveProductsToStorage(products: Product[]): void {
    window.localStorage.setItem('products', JSON.stringify(products));
  }
}
