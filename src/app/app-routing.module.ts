import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { 
        path: '', loadChildren: './modules/admin/admin.module#AdminModule'
      }
    ]
    
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      {
        path: '', loadChildren: './modules/home/home.module#HomeModule'
      }
    ]
    
  },
  {
    path: 'details',
    loadChildren: './modules/details/details.module#DetailsModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
