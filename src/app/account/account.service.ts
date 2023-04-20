import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, map, of } from 'rxjs';
import { User } from '../shared/Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  AppURL = "https://localhost:7077/api/";
  private currentUserSource = new ReplaySubject<User|null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private _http:HttpClient,private _router:Router) { }

  register(data:FormData){
    return this._http.post<User>(this.AppURL + 'Account/Register',data).pipe(
      map(user=>{
        localStorage.setItem('toke',user.token);
        this.currentUserSource.next(user);
      })
    );
  }

  login(data:FormData){
    return this._http.post<User>(this.AppURL + 'Account/Login',data).pipe(
      map(user=>{
        localStorage.setItem('toke',user.token);
        this.currentUserSource.next(user);
        return user;
      })
    );
  }

  logOut(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this._router.navigateByUrl('/')
  }

  checkEmailIsExist(email:string){
    return this._http.get<boolean>(this.AppURL + 'Account/EmailIsExist?email=' + email);
  }

  getCurrentUser(token:string|null){
    if(token === null){
      this.currentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`)
    return this._http.get<User>(this.AppURL + 'Account/GetCurrentUser',{headers}).pipe(
     map(user=>{
      if(user){
        localStorage.setItem('token',user.token)
        this.currentUserSource.next(user);
        return user
      } else{
        return null
      }
     })
    );

  }
}
