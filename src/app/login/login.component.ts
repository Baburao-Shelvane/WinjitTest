import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userList =[];
  constructor(
    private auth: AuthGuardService,
    private route: Router
  ) { }

  ngOnInit() {
    var user = this.auth.isLoggedIn();
    console.log("user --> "+ user);
    if(user){
      this.route.navigate(['/dashboard']);
    }  
  }

  authenticate(data:any){
    this.userList = JSON.parse(localStorage.getItem('users'));
    console.log(this.userList);
    var isAuthenticate = this.userList.filter( (result,index) => {
      console.log(result);
      if(data.email == result.email){
        return result;
      }
        
    });
    console.log(isAuthenticate);
    
    if(isAuthenticate){
      localStorage.setItem('currentUser',data.email);
      return true;
    }else{
      return false;
    }
    
  }

}
