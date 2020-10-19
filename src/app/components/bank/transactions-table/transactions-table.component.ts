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

  constructor() {
  }
  @Input() currentUser: CustomerDto;
  @Input() balance: number;
  @Input() transactions: TransactionDto[] = [];
  activePage = 0;
  p: number;
  ngOnInit(): void {
  }
  displayActivePage(activePageNumber: number): void{
    this.activePage = activePageNumber;
  }
}
