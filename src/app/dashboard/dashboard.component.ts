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
          title: 'Book Id',
          editable: false,
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
      hideSubHeader: false,
      pager : {
        display : true,
        perPage:10
      },
      actions: {
        add: false,
        edit: true,
        delete: true,
        position: 'right'
      },
      edit: {
        editButtonContent: ' &nbspEdit &nbsp',
        saveButtonContent: ' &nbspUpdate &nbsp',
        cancelButtonContent:'Cancel',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: 'Delete',
        confirmDelete: true
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
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      },
      {
        id: 4,
        name: "Zngular JS",
        price: "100"
      }
    ];
    
  }

  ngOnInit() {
    this.userList = JSON.parse(localStorage.getItem('users'));
    console.log(this.userList);
    this.source = new LocalDataSource(this.data);
  }
 
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }  
  }
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
