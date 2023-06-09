import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';
import { DeliveryMethod } from 'src/app/shared/Models/DeliveryMethod';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  @Input() taxCost:number = 0;
  private _totalCrt: any;
  public get totalCrt(): any {
    return this._totalCrt;
  }
  public set totalCrt(value: any) {
    this._totalCrt = value;
  }
  allOrder = [
    {id:1, name:"White T-Shirt", brand:"GUCCI", price:250,qty:2, img:"s2.png"},
    {id:2, name:"T-Shirt Over-size", brand:"GUCCI", price:320,qty:1, img:"s1.png"},
    {id:3, name:"Test Product", brand:"H&M", price:450,qty:2, img:"s2.png"},
  
  ]

constructor(private _fb:FormBuilder,private _accountServices:AccountService) {
}

checkOutForm = this._fb.group({
  addressForm:this._fb.group({
    firstName:['',Validators.required], 
    lastName:['',Validators.required],
    street:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    zipCode:['',Validators.required],
  }),
  deliveryForm:this._fb.group({
    deliveryMethod:['',Validators.required]
  }),
  paymentForm:this._fb.group({
    nameOfCard:['',Validators.required]
  }),

})
  ngOnInit(): void {
    this.calcTotal();
  }


  getAddressFormValues(){
    this._accountServices.getUserAddress().subscribe({
      next:address=>{
        address && this.checkOutForm.get('addressForm')?.patchValue(address);
      }
    })
  }

  calcTotal(){
   let total = 0;
   for(let item of this.allOrder){
     total +=  item.price * item.qty;
   }
   this.totalCrt = total;
  }



}
