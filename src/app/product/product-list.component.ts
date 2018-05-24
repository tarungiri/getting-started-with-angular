import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  listFilter: string;
  errorMessage: string;
  products:IProduct[];

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.productSvc.getAllProducts().subscribe(data=>
    {
      this.products = data;
    },
    err => alert(err)
    )
  }

}
