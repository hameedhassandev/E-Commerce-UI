import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  registerForm!: FormGroup
  isError= false
  errMsg:any
  constructor(private _fb:FormBuilder, private _accountService:AccountService, private _router: Router) {
}  

ngOnInit(): void {
  this.registerForm = this._fb.group({
    displayName:['',Validators.required],
    email : ['', Validators.required],
    password : ['', Validators.required],
     
  })
}

register(){
  var fData = new FormData();
  fData.append('Email',this.registerForm.get('email')?.value);
  fData.append('Password',this.registerForm.get('password')?.value);
  fData.append('DisplayName',this.registerForm.get('displayName')?.value);
  if(this.registerForm.valid){
    this._accountService.register(fData).subscribe({
      next:(res)=>{ 
          console.log(res)
          this._router.navigate(['/shop']);
        },error: err=>{  
          this.isError = true
          this.errMsg =  err.error;
          console.log(err);}
     });
  }}

}

