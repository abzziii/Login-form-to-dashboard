import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { DialogComponent } from './dialog/dialog.component';
import { CreatedataComponent } from './createdata/createdata.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductDetailComponent } from './dashboard/product/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'createdata', component: CreatedataComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'product',  // ← product route
        loadComponent: () =>
          import('./dashboard/product/product.component').then(m => m.ProductComponent)
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./dashboard/cart/cart.component').then(m => m.CartComponent)
      },
    ]
  },

  { path: '**', redirectTo: 'login' }
];
