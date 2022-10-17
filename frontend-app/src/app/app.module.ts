import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductRetrieveComponent } from './admin-product-retrieve/admin-product-retrieve.component';
import { SearchComponent } from './search/search.component';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    AddProductComponent,
    AdminProductRetrieveComponent,
    SearchComponent,
   
    ChangePasswordComponent,
        ViewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
