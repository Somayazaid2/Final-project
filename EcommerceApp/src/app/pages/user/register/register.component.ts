import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg : string = ""
  y : boolean = false
  registerUser:FormGroup=new FormGroup({
    username:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])

  })

  constructor(private _user:UserService , private router: Router ) {
    _user.flag=false

   }

  ngOnInit(): void {
    }
    get username(){ return this.registerUser.get('username')}
    get email(){ return this.registerUser.get('email')}
    get password(){ return this.registerUser.get('password')}

    onBlur() : void { this.y=true }
    handleRegisterForm(register:FormGroup): void{
      console.log(this.registerUser.value)
      if(register.valid){
        this._user.register(this.registerUser).subscribe(
          (res)=>{return res.userData} ,
              // this.toastr.success('user registeration successful')},
          (e)=>{ this.msg =  e.error.data  },
          ()=>{
            this.msg=""
          this.y=false
          register.reset()
          this._user.flag=true
           this.submit()
          

          }
        )
      }
    
    }
    submit(){
      this.router.navigateByUrl('/login')

    }
  
}
