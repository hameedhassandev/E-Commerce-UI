import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckOutService } from '../check-out.service';
import { BasketService } from 'src/app/basket/basket.service';
import { Basket } from 'src/app/shared/Models/Basket';
import { Address } from 'src/app/shared/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent implements OnInit{
  @Input() checkoutForm !:FormGroup;

 
  constructor(private _checkoutService:CheckOutService, private _basketService:BasketService,private router:Router) {
    
  }
  ngOnInit(): void {
  }
  
  submitOrder(){

    this.router.navigate(['check-out/success'])
    const basket = this._basketService.getCurrentValue();
    if(!basket) return;
    const orderToCreate = this.getOrderToCreate(basket);
    if(!orderToCreate) return;
    // this._checkoutService.CreateService(orderToCreate).subscribe({
    //   next:alert('order submited successfully')
    // });
  }


  private getOrderToCreate(basket:Basket){
    const deliveryMethodId = this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')?.value;
    const shippToAddress = this.checkoutForm?.get('addressForm')?.value as Address;

    if(!deliveryMethodId || !shippToAddress) return;
    return{
      basketId:basket.id,
      deliveryMethodId:deliveryMethodId,
      shippToAddress:shippToAddress
    }
  }
}
