import {Injectable} from '@angular/core';
import {HttpInterceptor,HttpHandler,HttpRequest,HttpSentEvent,HttpHeaderResponse,HttpProgressEvent,HttpResponse,HttpUserEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { AuthService } from './user/auth.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
    
    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> 
    {
        console.log("Interceptor invoked.");

        if(req.url.indexOf('/token')>0)
        {
            var headersForToken = new HttpHeaders({
                'Content-Type':  'application/x-www-form-urlencoded'
              }); 

              return next.handle(req);
        }

        var bearerToken = this.authService.getLocalStorageData().access_token;
        var authHeader = "Bearer " + bearerToken;
        const authRequest = req.clone({setHeaders : {"Authorization" : authHeader}});
        return next.handle(authRequest);
    }
}