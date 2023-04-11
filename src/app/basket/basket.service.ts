import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket, BasketItem } from '../shared/Models/Basket';
import { Product } from '../shared/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  AppURL = "https://localhost:7077/api/";
  private basketSource  = new BehaviorSubject<Basket|null>(null);
  basketSource$= this.basketSource.asObservable(); 
  constructor(private _http:HttpClient) { }

  getBasket(basketId:string){
    return this._http.get<Basket>(this.AppURL + 'Basket?basketId='+ basketId).subscribe({
      next:basket=>{
        this.basketSource.next(basket);
      }
    })
  }

  setBasket(basket:Basket){
    return this._http.post<Basket>(this.AppURL + 'Basket', basket).subscribe({
      next:basket=>{
        this.basketSource.next(basket);
      }
    })
  }

  getCurrentValue(){

    return this.basketSource.value;
  }

  addToBasket(item:Product,qty=1){
    const proItem = this.mapProductToBasket(item);
    const basket = this.getCurrentValue() ?? this.createBasket();
    basket.baskeItems = this.addOrUpdateItem(basket.baskeItems,proItem,qty);
    this.setBasket(basket);
  }

  addOrUpdateItem(items:BasketItem[],prodItem:BasketItem,qty:number):BasketItem[]{
      const item = items.find(x=>x.id === prodItem.id);
      if(item) item.qty += qty;
      else{
        prodItem.qty = qty;
        items.push(prodItem);
      }
      return items;
  }

  createBasket():Basket{
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }
  private mapProductToBasket(item:Product){
    return{
      id:item.id,
      productName:item.name,
      price:item.price,
      qty:0,
      pictureUrl:item.pictureUrl,
      brand:item.productBrand,
      type:item.productBrand

    }

  }
  updateBasket(){

  }

  deleteBasket(){

  }
}
