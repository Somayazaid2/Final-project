import { Component } from '@angular/core';
import { UserService } from './providers/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _user:UserService){}
}
