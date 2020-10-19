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
  @Input() transactions: TransactionDto[] = [];
  ngOnInit(): void {}
}
