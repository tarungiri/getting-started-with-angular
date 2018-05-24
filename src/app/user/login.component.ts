import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Router, ActivatedRoute} from '@angular/router'
import { AutoLogoutService } from '../auto-logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AutoLogoutService]
})
export class LoginComponent implements OnInit {

  userName: string="";
  password: string="";
  constructor(private authSvc: AuthService,private route: Router,private logout: AutoLogoutService) {

   }

  ngOnInit() {
  }

  logOn(): void{
    if(this.userName=="" || this.password=="")
    {
      alert("Please input valid credentials.");
    }
    else
    {
      this.authSvc.logOn(this.userName,this.password).subscribe(
      data => {
        localStorage.setItem('lastAction',Date.now().toString());
        this.authSvc.setLocalStorageData(data);
        this.authSvc.SetUserAuthentication(true);
        this.route.navigate(['/home']); 
      },
      err => alert(err.error.error_description)
    )
  }
}

}
