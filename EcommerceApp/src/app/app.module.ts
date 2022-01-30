import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginuserComponent } from './pages/user/loginuser/loginuser.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/user/home/home.component';
import { HomepageComponent } from './pages/admin/homepage/homepage.component';
import { AddProuductComponent } from './pages/admin/add-prouduct/add-prouduct.component';
import { MyProductComponent } from './pages/admin/my-product/my-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginuserComponent,
    Err404Component,
    HomeComponent,
    HomepageComponent,
    AddProuductComponent,
    MyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
