import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SelectProductComponent } from './select-product/select-product.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'selectedItem/:id', component: SelectProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
