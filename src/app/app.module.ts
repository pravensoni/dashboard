import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
import { LoginPageComponent } from "./login-page/login-page.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductsComponent } from "./products/products.component";
import { SideMenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OrdersComponent,
    ProductsComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
