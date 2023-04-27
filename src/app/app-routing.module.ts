import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path:"contact-us",component:ContactUsComponent},
  {path:"about",component:AboutComponent},
  {path:"product",component:ProductComponent},
  {path:"store",component:StoreComponent},
  {path: '**', pathMatch: 'full', component:Page404Component},





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
