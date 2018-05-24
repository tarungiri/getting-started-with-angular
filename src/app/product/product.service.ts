import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const productAPIUrl: string = "http://localhost:8001/api/";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<any>{
    var products = this.http.get(productAPIUrl+'product');
    return products;
  }
}
