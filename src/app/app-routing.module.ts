import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

const appRoutes: Routes = [
  {
  path: 'home',
  component: WelcomeComponent
},
{ path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: 
  [],
  exports :[RouterModule]
})
export class AppRoutingModule { }
