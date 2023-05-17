import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryMethod } from '../shared/Models/DeliveryMethod';
import { map } from 'rxjs';

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
}
