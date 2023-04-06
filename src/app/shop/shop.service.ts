import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paging } from '../shared/Models/Paging';
import { Product } from '../shared/Models/Product';
import { Observable } from 'rxjs';
import { Brand } from '../shared/Models/Brand';
import { ProdType } from '../shared/Models/ProdType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private _http:HttpClient) { }
  AppURL = "https://localhost:7077/api/";

  getProducts(brandId?:number,typeId?:number):Observable<Paging<Product[]>>{
    let params = new HttpParams();
    if(brandId) params = params.append("brandId",brandId);
    if(typeId) params = params.append("typeId",typeId);

    return this._http.get<Paging<Product[]>>(this.AppURL + "Product/GetAllProducts",{params:params});
  }

  getBrands():Observable<Brand[]>{
    return this._http.get<Brand[]>(this.AppURL + "Product/ProductBrands");
  }


  getProdTypes():Observable<ProdType[]>{
    return this._http.get<ProdType[]>(this.AppURL + "Product/ProductTypes");
  }
}
