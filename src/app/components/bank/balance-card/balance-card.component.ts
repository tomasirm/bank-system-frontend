import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {CustomerDto} from '../../../dto/Customer.dto';
import {BankService} from '../../../services/bank.service';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.css']
})
export class BalanceCardComponent implements OnInit {

  constructor() {
  }

  @Input() currentUser: CustomerDto;
  @Input() balance: number;

  ngOnInit(): void {}

  formatCurrency = (value, digits = 0) => {
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: digits }).format(value);
  }

}
