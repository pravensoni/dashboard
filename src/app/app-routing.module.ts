import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from "./orders/orders.component";
import { ProductsComponent } from "./products/products.component";
import { LoginPageComponent } from "./login-page/login-page.component";



const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }