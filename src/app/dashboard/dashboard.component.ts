import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userList =[];
  public settings;
  public data;

  source: LocalDataSource;

  constructor() { 
    this.settings = {
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Book Name',
          sort:true
        },
        price: {
          title: 'Book Price'
        }
      },
      attr: {
        class: 'table table-bordered'
      },
      hideSubHeader:{
        hideSubHeader:false
      },
      actions: {
        add: false,
        edit: false,
        delete: false,
        position: 'right'
      },
    };
    this.data = [
      {
        id: 1,
        name: "Angular JS",
        price: "100"
      },
      {
        id: 2,
        name: "Nngular JS",
        price: "100"
      },
      {
        id: 3,
        name: "Mngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
    ];
    
  }

  ngOnInit() {
    this.userList = JSON.parse(localStorage.getItem('users'));
    console.log(this.userList);
    this.source = new LocalDataSource(this.data);
  }

}
