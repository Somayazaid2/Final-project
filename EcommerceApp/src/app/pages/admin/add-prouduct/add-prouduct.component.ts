import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';


@Component({
  selector: 'app-add-prouduct',
  templateUrl: './add-prouduct.component.html',
  styleUrls: ['./add-prouduct.component.css']
})
export class AddProuductComponent implements OnInit {
  product:any={title:"", desc:"",categories:[],size:"",color:"",price:"",img:""}

  constructor(private _user:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  handelAddProduct(data:NgForm): void {
    console.log(this._user)
    if(data.valid){
      this._user.addProduct(this.product).subscribe(
        (res)=>{console.log(res)
        return res.data},
        (e)=>{},
        ()=>{}
      )
    }



  }

}
