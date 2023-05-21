import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryMethod } from '../shared/Models/DeliveryMethod';
import { map } from 'rxjs';
import { Basket } from '../shared/Models/Basket';
import { Order } from '../shared/Models/Order';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  AppURL = "https://localhost:7077/api/";
  constructor(private _http:HttpClient) {

   }


   getDeliveryMethod(){
    return this._http.get<DeliveryMethod[]>(this.AppURL + 'Order/DeliveryMethod').pipe(
      map(d=>{
        return d.sort((a:any,b:any)=>b.price -a.price)
      })
    );
   }


   
  calcTotal(totalInCart:any){
    let total = 0;
    for(let item of totalInCart){
      total +=  item.price * item.qty;
    }
    return totalInCart = total;
   }
 
 setShippingCost(deliveryMethod:DeliveryMethod){
   return  deliveryMethod.price;
   
 }

 CreateService(order:any){

 }
}
