import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerDto} from '../../dto/Customer.dto';
import {LoginService} from '../../services/login.service';
import {LoginDto} from '../../dto/Login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto: LoginDto = new LoginDto();
  isLoading = false;
  message: string;
  class: string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.loginService.login(this.loginDto).subscribe(data => {
      this.isLoading = false;
      this.loginService.addCurrentUser(data);
      this.router.navigate(['/bank']);

    }, error => {
      this.message = error.error.message;
      this.class = 'bg-danger text-light';
      this.isLoading = false;
      console.log(error);
    });
  }

}
