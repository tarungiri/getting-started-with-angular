import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

const tokenAPIUrl: string = "http://localhost:8001/token";

@Injectable()
export class AuthService {
  private isAuthenticated: boolean = false;
  constructor(private http: HttpClient) { }

  logOn(username:string,password:string): Observable<any>{
    var data = "grant_type=password&username="+username+"&password="+password;
    return this.http.post(tokenAPIUrl,data);
  }

  IsUserAuthenticated(): boolean
  {
    return this.isAuthenticated;
  }

  getLocalStorageData()
  {
    return JSON.parse(localStorage.getItem("userData"));
  }

  setLocalStorageData(tokendata)
  {
    return localStorage.setItem("userData" , JSON.stringify(tokendata));
  }

  SetUserAuthentication(isAthenticUser:boolean):void{
    this.isAuthenticated = isAthenticUser;
  }
}
