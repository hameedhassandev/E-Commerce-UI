import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out/check-out.component';
import { SharedModule } from '../shared/shared.module';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './checkout-delivery/checkout-delivery.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component'



@NgModule({
  declarations: [
    CheckOutComponent,
    CheckoutAddressComponent,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    SharedModule,
    CdkStepperModule
  ],
  exports:[
    CdkStepperModule
  ]

})
export class CheckOutModule { }
