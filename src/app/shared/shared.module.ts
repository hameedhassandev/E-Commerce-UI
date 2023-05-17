import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { PagerComponent } from './pager/pager.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component'

@NgModule({
  declarations: [
    HeaderComponent,
    PagerComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    CdkStepperModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[PaginationModule,
          HeaderComponent,
          PagerComponent,
          StepperComponent,
          CarouselModule,
          BsDropdownModule,
        ReactiveFormsModule,
        CdkStepperModule]
})
export class SharedModule { }
