import { Component , OnInit} from '@angular/core';
import { AuthService } from './user/auth.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';
  loading: boolean = false;

  constructor(private authSvc: AuthService, private route: Router) { }

  ngOnInit(){
  }

  logout():void{
    localStorage.clear();
    this.authSvc.SetUserAuthentication(false);
    this.route.navigate(['/login']);
  }

}
