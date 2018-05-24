import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../user/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CanActivateProduct implements CanActivate {
  constructor(private authSvc : AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
      if(this.authSvc.IsUserAuthenticated())
      {        
        console.log("Access Granted");
        return true;
      }
      alert('please login to access.');
      console.log("No Access");
    return false;
  }
}