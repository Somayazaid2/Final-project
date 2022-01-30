import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let accesstoken = localStorage.getItem('accesstoken')
    if(accesstoken){
      request = request.clone({
        headers: request.headers.set("token", `bearer ${accesstoken}`)
      })
    }
    return next.handle(request);
  }
}
