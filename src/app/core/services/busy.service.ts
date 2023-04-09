import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  counter = 0;
  constructor(private _spinnerService:NgxSpinnerService) { }

  busy(){
    this.counter ++;
    this._spinnerService.show(undefined,{
      type:'timer',
      bdColor:'rgba(255,255,255,0.6)',
      color:'#333333'
      
    })
    
  }

  idle(){
    this.counter --;
    if(this.counter <= 0){
      this._spinnerService.hide();
    }
  }
}


