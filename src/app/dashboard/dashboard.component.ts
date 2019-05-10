import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userList =[];

  constructor() { 
    
  }

  ngOnInit() {
    this.userList = JSON.parse(localStorage.getItem('users'));
    console.log(this.userList);
    
  }

}
