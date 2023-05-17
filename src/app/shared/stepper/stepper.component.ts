import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],

})
export class StepperComponent extends CdkStepper  implements OnInit{

@Input() linearModuleSelected = true;

onClick(index:number){
  this.selectedIndex = index;
}

ngOnInit(): void {
  this.linear = this.linearModuleSelected
}

}
