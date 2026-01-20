import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Home } from './home/home';
import { Goods } from './goods/goods';
import { Parcels } from './parcels/parcels';
import { Earnings } from './earnings/earnings';
import { Contracts1 } from './contracts1/contracts1';
import { Contracts2 } from './contracts2/contracts2';
import { NFR } from './nfr/nfr';
import { Uts } from './uts/uts';
import { Prs } from './prs/prs';

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
  { path: 'contracts2', component: Contracts2 },
  { path: 'nfr', component: NFR },
  { path: 'uts', component: Uts },
   { path: 'prs', component: Prs },
  // Wildcard fallback
  { path: '**', redirectTo: '' }
];
