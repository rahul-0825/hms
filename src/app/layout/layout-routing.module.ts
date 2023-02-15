import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path:'addtoCart',
    loadChildren:()=>import('./add-to-cart/add-to-cart.module').then(m=>m.AddToCartModule)
  },
  {
    path:'product',
    loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
