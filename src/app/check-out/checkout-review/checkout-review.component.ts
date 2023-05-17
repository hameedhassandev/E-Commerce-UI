import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.css']
})
export class CheckoutReviewComponent {
  allCart = [
    {id:1, name:"White T-Shirt", brand:"GUCCI", price:250,qty:2, img:"s2.png"},
    {id:2, name:"T-Shirt Over-size", brand:"GUCCI", price:320,qty:1, img:"s1.png"},
    {id:3, name:"Test Product", brand:"H&M", price:450,qty:2, img:"s2.png"},
  
  ]
}
