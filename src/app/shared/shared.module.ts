import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { PagerComponent } from './pager/pager.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[PaginationModule,
          HeaderComponent,
          PagerComponent,
          CarouselModule]
})
export class SharedModule { }
