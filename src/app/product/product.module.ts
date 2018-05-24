import { NgModule, Component } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateProduct} from './can-activate-product';
import { AddProductComponent } from './add-product.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { SharedModule } from '../shared/shared.module';

const appProductRoutes: Routes = [
{
  path:'products',
  canActivate: [CanActivateProduct],
  children:[
    {
      path: '',
      component: ProductListComponent
    },
    {
      path:':id/edit',
      component: AddProductComponent
    }
  ]
}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(appProductRoutes)
  ],
  declarations: [ProductListComponent, AddProductComponent, ProductFilterPipe],
  providers: [CanActivateProduct,ProductService]
  
})
export class ProductModule { }
