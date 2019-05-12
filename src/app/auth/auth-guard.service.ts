import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { 
    
  }
  getToken(){
    var user = localStorage.getItem('currentUser');
    return user;
  }
  isLoggedIn() {
    return this.getToken();
  }
}
