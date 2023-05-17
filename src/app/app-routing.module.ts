import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then(m=>m.ShopModule)},
  {path:'basket',loadChildren:()=>import('./basket/basket.module').then(m=>m.BasketModule)},
  {path:'check-out',/*canActivate:[AuthGuard],*/loadChildren:()=>import('./check-out/check-out.module').then(m=>m.CheckOutModule)},
  {path:'account',loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)},
  {path:'**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  