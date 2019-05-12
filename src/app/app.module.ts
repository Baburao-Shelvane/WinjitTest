import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from '../app/auth/auth-guard.service';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ToastrModule } from 'ng6-toastr-notifications';
import { Books } from './api/books';
import { Users } from './api/users';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    Books,
    Users
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
