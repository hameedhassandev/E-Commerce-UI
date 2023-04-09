import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from 'src/app/shared/Models/Product';
import { ProdType } from 'src/app/shared/Models/ProdType';
import { Brand } from 'src/app/shared/Models/Brand';
import { ShopBarams } from 'src/app/shared/Models/ShopBarams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:Product[]= [];
  brands:Brand[]= [];
  prodTypes:ProdType[]= [];
  totalCount = 0;
  isEmptyProducts = false;

  @ViewChild('search') searchTerms?:ElementRef;
shopParams =  new ShopBarams();
  sortList = [{name:'Name',value:'name'},
          {name:'Price from hight to low',value:'priceAsc'},
          {name:'Price from low to hight', value:'priceDesc'}]

  sortSelected='name';
  constructor(private _shopService:ShopService){}

  ngOnInit(): void {
    this.AllProducts()
    this.AllBrands()
    this.AllProductTypes()
    }

AllProducts(){
    this._shopService.getProducts(this.shopParams).subscribe({
      next:(res)=>{
        this.isEmptyProducts = false;
        console.log(res)
        this.products = res.data;
        console.log(this.products);
        if(this.products.length === 0) this.isEmptyProducts = true;
        console.log('is empty: ' + this.isEmptyProducts)
        this.shopParams.pageNumber = res.pageIndex;
        console.log('page index = ' + res.pageIndex)
        this.shopParams.pageSize = res.pageSize;
        this.totalCount = res.count;
   },
      error:(err)=>{
        console.log(err)
      }
  })
}


AllBrands(){
  this._shopService.getBrands().subscribe({
    next:(res)=>{
      this.brands = [{
        id:0,brandName:'All Brands'
      },...res]
      console.log(this.brands)
 },
    error:(err)=>{
      console.log(err)
    }
})}


AllProductTypes(){
  this._shopService.getProdTypes().subscribe({
    next:(res)=>{
      this.prodTypes = [{
        id:0,typeName:'All Types'
      },...res]
      console.log(this.prodTypes)
 },
    error:(err)=>{
      console.log(err)
    }
})}

onBrandSelected(brandId:number){
  this.shopParams.brandId = brandId;
  this.shopParams.pageNumber = 1;
  this.AllProducts();
}

onTypeSelected(typeId:number){
  this.shopParams.typeId = typeId;
  this.shopParams.pageNumber = 1;

  this.AllProducts();
}

onSortSlected(event:any){
  this.shopParams.sort = event.target.value;
  this.shopParams.pageNumber = 1;

  this.AllProducts();

}

onPageChanges(event:any){
 if(this.shopParams.pageNumber !== event.target){
  console.log('page no. = ' + this.shopParams.pageNumber)
  this.shopParams.pageNumber = event.page;
  
  this.AllProducts()
 }
}


onSearch(){
  this.shopParams.search = this.searchTerms?.nativeElement.value;
  this.shopParams.pageNumber = 1;
  this.AllProducts()
}


onClear(){
  if(this.searchTerms)
  this.searchTerms.nativeElement.value = "";
  this.shopParams = new ShopBarams();
  this.AllProducts();

}
}
