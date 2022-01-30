import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  user : any = { username:"", password:"" }
  msg : string = ""
  x : boolean = false

  constructor(private _user:UserService , private router: Router ) { 
    _user.flag=false
  }

  ngOnInit(): void {
  }
  onBlur() : void { this.x=true }
  handleLogin(loginForm:NgForm): void {
    if(loginForm.valid){
      this._user.login(this.user).subscribe(
        (res) => { localStorage.setItem("token", res.data.accessToken) } ,
        (e)=>{ this.msg =  e.error.data },
        ()=>{
          this.msg=""
          this.x=false
          loginForm.resetForm()
          this.product()
        }        
      )
    }
  }
  product(){
    this._user.getAllProduct().subscribe(
      (data)=>{this._user.userData = data.data},
      (e)=>{},
      ()=>{ 
        this._user.flag=true
        this.router.navigateByUrl('/allproduct')
      }
    )
  }

}
