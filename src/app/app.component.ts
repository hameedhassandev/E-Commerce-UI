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
  constructor(private _http:HttpClient){

  }
  ngOnInit(): void {
 
  }
}
