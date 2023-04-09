import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product:any
  constructor(private _shopService : ShopService,private _route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.getProductById()
  }
  
  getProductById(){
    const pId = this._route.snapshot.paramMap.get('id');
    if(pId)
    this._shopService.getProduct(+pId).subscribe({
      next:(res)=>{
        this.product = res
        console.log(this.product)
   },
      error:(err)=>{
        console.log(err)
      }
  })
  }
}
