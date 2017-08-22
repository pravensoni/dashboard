import { Component, OnInit } from '@angular/core';
import { Order } from "../models/order";
import { CommonService } from '../services/common.service';


@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [CommonService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  constructor(
    private commonService: CommonService,
  ) { }

  getOrders() {
    this.commonService.getOrders().then(response => {
      this.orders = response;
    });
  }

  ngOnInit() {
    this.getOrders();
  }

}
