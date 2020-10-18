import { Component, OnInit } from '@angular/core';
import {CustomerDto} from '../../dto/Customer.dto';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService,
              private router: Router) { }
  customerDto: CustomerDto = new CustomerDto();
  isLoading = false;
  message: string;
  class: string;
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.loginService.register(this.customerDto).subscribe(data => {
      this.isLoading = false;
      this.message = 'Customer saved';
      this.class = 'bg-info text-light';
    }, error => {
      this.isLoading = false;
      this.message = error.error.message;
      this.class = 'bg-danger text-light';
      console.log(error);
    });
  }
}
