import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { CustomerInfo } from "../models/customerInfo";

import 'rxjs/add/operator/toPromise';



@Injectable()
export class CommonService {

    //private productUrl = 'http://13.126.126.15/webs/product/';
    //private orderUrl = 'http://13.126.126.15/webs/order/';
    //private mailUrl = 'http://13.126.126.15/webs/mail/';

    private url = 'http://localhost:8080/';


    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    login(uname: string, pass: string): Promise<string> {
        let data = new URLSearchParams();
        data.append('userName', uname);
        data.append('password', pass);
        let promise = this.http.post(this.url+"login/", data, {
            withCredentials: true,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }).toPromise().then(orderStatus => orderStatus.text() as string).catch(this.handleError);
        return promise;
    }

    getOrders(): Promise<Order[]> {

        let promise = this.http.get(this.url+"orderList",{withCredentials: true}).toPromise().then(orderStatus => orderStatus.json() as Order[]).catch(this.handleError);
        return promise;
    }


}