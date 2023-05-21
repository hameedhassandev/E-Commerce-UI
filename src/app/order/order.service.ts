import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  AppURL = "https://localhost:7077/api/";
  constructor(private _http:HttpClient) {}

  getOrderForUser(){
    return this._http.get<Order[]>( this.AppURL + 'GetUserOrders');
  }

  getOrderDetails(OrderId:number){
    return this._http.get<Order>( this.AppURL + 'GetUserOrdersById/' + OrderId);
  }
}
