import { Address } from "./User";

export interface CreateOrder{
    basketId:string,
    deliveryMethodId:number,
    shipToAddress:Address,

}

export interface Order{
    id:number,
    buyerEmail:string,
    OrderDate:string,
    shipToAddress:Address,
    shippingPrice:number,
    orderItems:OrderItem[],
    status:string,
    subTotal:number
}

export interface OrderItem{
    productId:number,
    productName:string,
    pictureUrl:string,
    price:number,
    qty:number
}