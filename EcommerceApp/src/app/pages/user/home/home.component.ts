import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [
    "assets/1.jpg",
    "assets/2.jpg",
  ]

  constructor(private _user:UserService) { 
    _user.flag=true
  }

  ngOnInit(): void {
  }

}
