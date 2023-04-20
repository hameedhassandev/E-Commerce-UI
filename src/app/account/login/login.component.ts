import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  isError= false
  errMsg:any
  returnUrl:string = '';
  constructor(private _fb:FormBuilder, private _accountService:AccountService, private _router: Router,private _activatedRout:ActivatedRoute) {
    this.returnUrl = this._activatedRout.snapshot.queryParams['returnUrl'] || '/shop'
   
  }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
       
    })
  }

  login(){
    var fData = new FormData();
    fData.append('Email',this.loginForm.get('email')?.value);
    fData.append('Password',this.loginForm.get('password')?.value);
    if(this.loginForm.valid){
      this._accountService.login(fData).subscribe({
        next:(res)=>{
            console.log(res)
            this._router.navigate([this.returnUrl]);
          },error: err=>{  
            this.isError = true
            this.errMsg =  err.error;
            console.log(err);}
       });
    }}


  }


