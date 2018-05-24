import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user/userData';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './user/auth.service';
import { AuthIntercepter } from './auth.intercepter';
import { ProductModule } from './product/product.module';
import { TgErrorHandler } from './tg-error-handler';
import { AutoLogoutService } from './auto-logout.service';


@NgModule({
  declarations: [
    AppComponent ,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    UserModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: TgErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthIntercepter,
      multi:true
    },
  UserService,
  AuthService,
  AutoLogoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
