import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BankComponent} from './components/bank/bank.component';
import {ClientComponent} from './components/client/client.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'bank', component: BankComponent, canActivate: [AuthGuard]},
  { path: 'client', component: ClientComponent},
  { path: '**', redirectTo: 'bank' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
