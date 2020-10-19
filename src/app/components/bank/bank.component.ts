import {Component, OnInit} from '@angular/core';
import {CustomerDto} from '../../dto/Customer.dto';
import {LoginService} from '../../services/login.service';
import {BankService} from '../../services/bank.service';
import {TransactionDto} from '../../dto/Transaction.dto';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor(private loginService: LoginService,
              private bankService: BankService) {
  }

  currentUser = new CustomerDto();
  balance: number;
  showToast = false;
  transactions: TransactionDto[] = [];
  ngOnInit(): void {
    this.currentUser = this.loginService.currentCustomer;
    this.getTransactions();
    this.getBalance();
  }

  getBalance(): void {
    this.bankService.getbalance(this.currentUser.dni).subscribe(data => {
      this.balance = data;
    }, error => {
      console.log(error);
    });
  }

  getTransactions(): void{
    this.currentUser = this.loginService.currentCustomer;
    this.bankService.getTransactions(this.currentUser.dni).subscribe(data => {
      this.transactions = data;
      this.transactions = this.transactions.sort((a, b) =>  b.id - a.id);
    }, error => {
      console.log(error);
    });
  }

  reciveTransactionEmitter(event): void{
    if (event){
      this.getTransactions();
      this.getBalance();
    }
  }
}
