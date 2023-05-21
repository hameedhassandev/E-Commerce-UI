import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm !:FormGroup;

  constructor(private _accountService:AccountService) {
    
  }
  ngOnInit(): void {
  }

  saveUserAddress(){
    this._accountService.updateUserAddress(this.checkoutForm?.get('addressForm')?.value).subscribe({
      next:()=>{
      alert('Address Saved Successfully!')
      this.checkoutForm.get('addressForm')?.reset(this.checkoutForm?.get('addressForm')?.value)
    }
  })
  }

}
