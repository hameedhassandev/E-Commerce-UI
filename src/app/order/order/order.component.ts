import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from 'src/app/shared/Models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  Orders:Order[] = [];
  
  
  constructor(private _orderService:OrderService) {
    
  }
  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(){
    this._orderService.getOrderForUser().subscribe({
      next:order=>this.Orders = order
    })
  }
}
