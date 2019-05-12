import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth/auth-guard.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Users } from '../api/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userList =[];
  public isAuthenticate:any = [];
  constructor(
    private auth: AuthGuardService,
    private route: Router,
    private userObj: Users,
    public toastrObj: ToastrManager
  ) { }

  ngOnInit() {
    var user = this.auth.isLoggedIn();
    if(user){
      this.route.navigate(['/dashboard']);
    }  
  }

  //funciton to check the user authenticate through email id.
  authenticate(data:any){
    //this.userList = JSON.parse(localStorage.getItem('users'));
    this.userList = this.userObj.getUsers();
    this.isAuthenticate = this.userList.filter( (result,index) => {
      if(data.email == result.user_email){
        return result;
      }
        
    });

    //if email id match with json data redirect to dashboard
    if(this.isAuthenticate.length > 0){
      //store login details into the local storage 
      var user = this.isAuthenticate;
      var info = [user[0].user_email,
        user[0].user_role
      ]
      localStorage.setItem('currentUser', JSON.stringify(info));
      
      this.toastrObj.successToastr('Login successfully..!', 'Success!');
      this.route.navigate(['/dashboard']);
    }else{
      this.toastrObj.errorToastr('Email or passsword does not match.', 'Oops!');
      return false;
    }
    
  }

}
