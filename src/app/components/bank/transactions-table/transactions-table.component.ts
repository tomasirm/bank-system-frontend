import {Component, Input, OnInit} from '@angular/core';
import {BankService} from '../../../services/bank.service';
import {LoginService} from '../../../services/login.service';
import {TransactionDto} from '../../../dto/Transaction.dto';
import {CustomerDto} from '../../../dto/Customer.dto';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  constructor(private bankService: BankService,
              private loginService: LoginService) {
  }
  @Input() currentUser: CustomerDto;
  @Input() balance: number;
  transactions: TransactionDto[] = [];
  ngOnInit(): void {
    this.currentUser = this.loginService.currentCustomer;
    console.log(JSON.stringify(this.currentUser));
    this.bankService.getTransactions(this.currentUser.dni).subscribe(data => {
      this.transactions = data;
      this.transactions = this.transactions.sort((a, b) =>  b.id - a.id);
    }, error => {
      console.log(error);
    });
  }

}
