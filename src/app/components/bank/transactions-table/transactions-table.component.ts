import {Component, Input, OnInit} from '@angular/core';
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
  formatCurrency = (value, digits = 0) => {
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: digits }).format(value);
  }
}
