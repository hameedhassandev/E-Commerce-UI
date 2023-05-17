import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckOutService } from '../check-out.service';
import { DeliveryMethod } from 'src/app/shared/Models/DeliveryMethod';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.css']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm !:FormGroup;
  deliveryMethod:DeliveryMethod[] = [
    {id:1,shortName:'UPS1',deliveryTime:'1/1/2/0000',description:'Fast delivery time',price:100},
    {id:2,shortName:'UPS2',deliveryTime:'1/1/2/0000',description:'Get it within 3 days',price:50},
    {id:3,shortName:'UPS3',deliveryTime:'1/1/2/0000',description:'Slower but cheap',price:20},
    {id:3,shortName:'UPS4',deliveryTime:'1/1/2/0000',description:'Free! pay now',price:0},


  ];

  constructor(private _checkoutService:CheckOutService) {
    
  }
  ngOnInit(): void {
    // console.log(this.deliveryMethod)
    // this._checkoutService.getDeliveryMethod().subscribe({
    //      // next:d=>this.deliveryMethod = d
    // })
  }

}
