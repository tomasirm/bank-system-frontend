import {Component, OnInit} from '@angular/core';
import {CustomerDto} from '../../dto/Customer.dto';
import {LoginService} from '../../services/login.service';
import {BankService} from '../../services/bank.service';

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

  ngOnInit(): void {
    this.currentUser = this.loginService.currentCustomer;
    this.getBalance();
  }

  getBalance(): void {
    this.bankService.getbalance(this.currentUser.dni).subscribe(data => {
      this.balance = data;
    }, error => {
      console.log(error);
    });
  }
}
