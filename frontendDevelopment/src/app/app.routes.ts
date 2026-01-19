import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Home } from './home/home';
import { Goods } from './goods/goods';
import { Parcels } from './parcels/parcels';
import { Earnings } from './earnings/earnings';

export const routes: Routes = [
  // Login
  { path: '', component: LoginComponent },

  // Common Home
  { path: 'home', component: Home },

  // Type-based homes
  { path: 'goods-home', component: Goods },
  { path: 'parcels-home', component: Parcels },
  { path: 'earnings-home', component: Earnings },

  // Fallback
  { path: '**', redirectTo: '' }
];
