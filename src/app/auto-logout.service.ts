import { Injectable } from "@angular/core";
import { Router } from '@angular/router'
import { AuthService } from "./user/auth.service";

const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 30000 // in ms
const STORE_KEY =  'lastAction';

@Injectable()
export class AutoLogoutService {
 
 intervalID: number;
 public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
 public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(private authSvc: AuthService, private router: Router) {
    this.check();
    this.initListener(); // TODO: Uncoment this once refresh token implemented 
    this.initInterval();
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    this.intervalID = window.setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if(!this.authSvc.IsUserAuthenticated() && this.intervalID>0)
    {
      window.clearInterval(this.intervalID);
    }

    // if (isTimeout && this.auth.loggedIn)
    if (isTimeout && this.authSvc.IsUserAuthenticated())  {
      localStorage.clear();
      this.authSvc.SetUserAuthentication(false);
      this.router.navigate(['/login']);
      window.clearInterval(this.intervalID);
    }
    
  }
}
