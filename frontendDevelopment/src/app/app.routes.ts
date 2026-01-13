import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Home', component: Home }
];

