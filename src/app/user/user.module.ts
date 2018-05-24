import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appUserRoutes: Routes = [
  {
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
}
];

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(appUserRoutes)
  ],
  providers: []
  
})
export class UserModule { }
