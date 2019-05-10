import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userList =[];
  constructor(
    private auth: AuthGuardService,
    private route: Router
  ) { }

  ngOnInit() {
      
  }

  register(data:any){
    console.log(data);
    if(localStorage.getItem('users')){
      this.userList = JSON.parse(localStorage.getItem('users'));
    }
    
    this.userList.push(data);
    var user = JSON.stringify(this.userList);
    
    localStorage.setItem('users',user);
  }

}
