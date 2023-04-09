import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxSpinnerModule,

  ],
  exports:[
    NavBarComponent,
    SectionHeaderComponent,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
