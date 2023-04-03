import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Paging } from './shared/Models/Paging';
import { Product } from './shared/Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  products:any[]= [];
  constructor(private _http:HttpClient){

  }
  ngOnInit(): void {
    this._http.get<Paging<Product[]>>("https://localhost:7077/api/Product/GetAllProducts?Sort=name").subscribe({
      next:(res)=>this.products = res.data,
      error:err=>console.log(err.error),
      complete:()=>{
        console.log('get products completed')
      }
    })
  }
}
