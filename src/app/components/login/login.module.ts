import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginService} from '../../services/login.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoginService]
})
export class LoginModule { }
