import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { SelectProductComponent } from './select-product/select-product.component';
import { UsercheckoutComponent } from './usercheckout/usercheckout.component';
import { SuccessComponent } from './success/success.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavBarComponent,
    CartComponent,
    SelectProductComponent,
    UsercheckoutComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
