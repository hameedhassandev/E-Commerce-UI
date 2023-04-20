import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  allCart = [
    {id:1, name:"White T-Shirt", brand:"GUCCI", price:250,qty:2, img:"s2.png"},
    {id:2, name:"T-Shirt Over-size", brand:"GUCCI", price:320,qty:1, img:"s1.png"},
    {id:3, name:"Test Product", brand:"H&M", price:450,qty:2, img:"s2.png"},
  
  ]
  totalCrt:any
  ngOnInit(): void {
    this.calcTotal();
  }

  calcTotal(){
   let total = 0;
   for(let item of this.allCart){
     total +=  item.price * item.qty;
   }
   this.totalCrt = total;
  }

  increaseCartByOne(prodId:number){
    var product = this.allCart.find(p=>p.id === prodId)
      if(product){
        product.qty ++;
        this.calcTotal()
    }
  }

  decreaseCartByOne(prodId:number){
    var product = this.allCart.find(p=>p.id === prodId)
    if(product){
      product.qty  === 1 ? this.removeFromCart(prodId):  product.qty --;
      this.calcTotal()
    }
  }

  removeFromCart(prodId:number){
    let product = this.allCart.find(p=>p.id === prodId)
    if(product){
     let index =  this.allCart.indexOf(product);
     this.allCart.splice(index,1)
      this.calcTotal()
    }



  }
}
