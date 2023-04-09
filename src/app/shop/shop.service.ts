import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paging } from '../shared/Models/Paging';
import { Product } from '../shared/Models/Product';
import { Observable } from 'rxjs';
import { Brand } from '../shared/Models/Brand';
import { ProdType } from '../shared/Models/ProdType';
import { ShopBarams } from '../shared/Models/ShopBarams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private _http:HttpClient) { }
  AppURL = "https://localhost:7077/api/";

  getProducts(shopParams:ShopBarams):Observable<Paging<Product[]>>{
    let params = new HttpParams();
    if(shopParams.brandId > 0) params = params.append("BrandId",shopParams.brandId);
    if(shopParams.typeId > 0) params = params.append("TypeId",shopParams.typeId);
    params = params.append("Sort", shopParams.sort);
    params = params.append("PageIndex", shopParams.pageNumber);
    params = params.append("PageSize", shopParams.pageSize);
    if(shopParams.search)     params = params.append("Search", shopParams.search);
    console.log('params: ' + params)

    return this._http.get<Paging<Product[]>>(this.AppURL + "Product/GetAllProducts",{params:params});
  }

  getBrands():Observable<Brand[]>{
    return this._http.get<Brand[]>(this.AppURL + "Product/ProductBrands");
  }


  getProdTypes():Observable<ProdType[]>{
    return this._http.get<ProdType[]>(this.AppURL + "Product/ProductTypes");
  }

  getProduct(id:number):Observable<Product>{
    return this._http.get<Product>(this.AppURL + "Product/GetProduct/"+ id);
  }
}
