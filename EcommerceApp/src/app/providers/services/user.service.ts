import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public flag = true
  public userData=null
 

  commonApiUrl = 'http://localhost:5000'
  constructor(private _http:HttpClient) { }

  register(userData:any) : Observable<any>{
    return this._http.post(`${this.commonApiUrl}/auth/register`,userData)

  }
  login(data: any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/auth/login`, data)
  }
  getAllProduct():Observable<any>{
    return this._http.get(`${this.commonApiUrl}/product/all`)
  }
  addProduct(data:any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/product/add`,data)
  }
}
