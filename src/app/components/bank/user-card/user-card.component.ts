import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {CustomerDto} from '../../../dto/Customer.dto';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  @Input() currentUser: CustomerDto;
  ngOnInit(): void {  }
  logout(): void{
    this.loginService.logout();
  }

}
