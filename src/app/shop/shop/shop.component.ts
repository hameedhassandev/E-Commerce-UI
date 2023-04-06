import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from 'src/app/shared/Models/Product';
import { ProdType } from 'src/app/shared/Models/ProdType';
import { Brand } from 'src/app/shared/Models/Brand';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:Product[]= [];
  brands:Brand[]= [];
  prodTypes:ProdType[]= [];
  constructor(private _shopService:ShopService){}

  ngOnInit(): void {
    this.AllProducts()
    this.AllBrands()
    this.AllProductTypes()
    }

AllProducts(){
    this._shopService.getProducts().subscribe({
      next:(res)=>{
        this.products = res.data
        console.log(this.products)
   },
      error:(err)=>{
        console.log(err)
      }
  })
}


AllBrands(){
  this._shopService.getBrands().subscribe({
    next:(res)=>{
      this.brands = res
      console.log(this.brands)
 },
    error:(err)=>{
      console.log(err)
    }
})}


AllProductTypes(){
  this._shopService.getProdTypes().subscribe({
    next:(res)=>{
      this.prodTypes = res
      console.log(this.prodTypes)
 },
    error:(err)=>{
      console.log(err)
    }
})}


}
