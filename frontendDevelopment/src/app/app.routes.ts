import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Home } from './home/home';
import { Goods } from './goods/goods';
import { Parcels } from './parcels/parcels';
import { Earnings } from './earnings/earnings';
import { Contracts1 } from './contracts1/contracts1';

export const routes: Routes = [

  // Login page
  { path: '', component: LoginComponent },

  // Optional common home (if needed)
  { path: 'home', component: Home },

  // Role-based pages (from backend)
  { path: 'goods', component: Goods },
  { path: 'parcels', component: Parcels },
  { path: 'earnings', component: Earnings },
   { path: 'contracts1', component: Contracts1 },
  
  // Wildcard fallback
  { path: '**', redirectTo: '' }
];
