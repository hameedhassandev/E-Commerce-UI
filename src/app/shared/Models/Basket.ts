import * as cuid from "cuid";
export interface BasketItem{
    id:number,
    productName:string,
    price:number,
    qty:number,
    pictureUrl:string,
    brand:string,
    type:string
}

export interface Basket{
    id:string,
    baskeItems:BasketItem[];
}

export class Basket implements Basket{
    id = cuid();
    baskeItems: BasketItem[]=[];
}