import {Product} from './product';
import {CustomerInfo} from './customerInfo';
import {PayInfo} from './payInfo';

export class Order {
  id: number;
  dispOrderId : string;
  products:Product[];
  customerInfo:CustomerInfo;
  paymentType;
  paymentStatus : string;
  subTotal:number;
  total:number;
  payInfo: PayInfo;
  date : Date;
  orderStatus: string;

}