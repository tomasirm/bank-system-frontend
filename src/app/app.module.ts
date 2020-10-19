import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientComponent} from './components/client/client.component';
import {BankComponent} from './components/bank/bank.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { TransactionsTableComponent } from './components/bank/transactions-table/transactions-table.component';
import { UserCardComponent } from './components/bank/user-card/user-card.component';
import { BalanceCardComponent } from './components/bank/balance-card/balance-card.component';
import { OptionsCardComponent } from './components/bank/options-card/options-card.component';
import { ToastComponent } from './shared/toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/bank/options-card/modal/modal.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    BankComponent,
    LoginComponent,
    RegisterComponent,
    TransactionsTableComponent,
    UserCardComponent,
    BalanceCardComponent,
    OptionsCardComponent,
    ToastComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
