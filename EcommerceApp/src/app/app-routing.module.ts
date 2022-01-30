import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/user/register/register.component';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginuserComponent } from './pages/user/loginuser/loginuser.component';
import { AddProuductComponent } from './pages/admin/add-prouduct/add-prouduct.component';
import { MyProductComponent } from './pages/admin/my-product/my-product.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginuserComponent},
  {path:"product", component:AddProuductComponent},
  {path:"allproduct",component:MyProductComponent},
  //{path:"", component:AllusersComponent},
  //{path:"login", component:LoginComponent},
  //{path:"user", children:[
   // {path:"", component:ProfileComponent},
    //{path:"show/:id", component:SingleuserComponent},
   // {path:"edit/:id", component:UsercardComponent},
   // {path:"delete/:id", component:RegisterComponent}
  //]},
  {path:"**", component:Err404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
