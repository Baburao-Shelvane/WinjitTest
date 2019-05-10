import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private http: HttpClient) { 
    
  }
  getToken(){
    var user = localStorage.getItem('currentUser');
    return user;
  }
  isLoggedIn() {
    return this.getToken();
  }
}
