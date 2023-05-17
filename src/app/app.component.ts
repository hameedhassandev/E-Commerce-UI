import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  constructor(private _http:HttpClient,private _basketService:BasketService, private _accountService:AccountService){

  }
  ngOnInit(): void {
    this.loadCurrentUser();
    const baskId = localStorage.getItem("basket_id");
    if(baskId) this._basketService.getBasket(baskId);
    

  }

  loadCurrentUser(){
    const token = localStorage.getItem('token');
    console.log('token:'+token)
    this._accountService.getCurrentUser(token).subscribe();
  }
}
