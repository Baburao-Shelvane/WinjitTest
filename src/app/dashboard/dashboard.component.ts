import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Books } from '../api/books';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //public userList =[];
  public role:string;
  public settings;
  public data;
  public isVisiable = "none";
  public newBook:any;
  @ViewChild('bookForm') formValues;

  source: LocalDataSource;

  constructor(private bookObj: Books, public toastrObj: ToastrManager) {
    
  }

  ngOnInit() {
    var user =  JSON.parse(localStorage.getItem('currentUser'));
    this.role = user.slice(-1)[0]; 
    console.log(this.role);
    
    //ng2 smart table setting 
    this.settings = {
      columns: {
        book_id: {
          title: 'Book Id',
          editable: false,
        },
        book_name: {
          title: 'Book Name',
          sort:true
        },
        book_price: {
          title: 'Book Price'
        },
        created_at: {
          title: 'Published',
          editable: false,
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
        edit: (this.role=="Admin") ? true:false,
        delete: true,
        position: 'right'
      },
      edit: {
        editButtonContent: '&nbsp<i class="fa fa-edit"></i>&nbsp',
        saveButtonContent: '&nbsp<i class="fa fa-save"></i>&nbsp',
        cancelButtonContent:'&nbsp<i class="fa fa-retweet"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '&nbsp<i class="fa fa-remove"></i>',
        confirmDelete: true
      },
    };

    //get books list.
    this.data = this.bookObj.getBooks();

    this.source = new LocalDataSource(this.data);

    
  }
 
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.toastrObj.successToastr('Book deleted successfully..!', 'Success!');
    } else {
      event.confirm.reject();
    }  
  }
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      this.toastrObj.successToastr('Book updated successfully..!', 'Success!');
    } else {
      event.confirm.reject();
    }
  }

  openBookModal(){
    this.isVisiable = "block";
  }
  closeBookModal(){
    this.isVisiable = "none";
  }

  addBook(newbook){
    console.log(newbook);
    this.isVisiable = "none";
    this.formValues.resetForm();
    this.toastrObj.successToastr('Book added successfully..!', 'Success!');
  }
}