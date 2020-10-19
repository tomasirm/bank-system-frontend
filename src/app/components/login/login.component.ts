import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {LoginDto} from '../../dto/Login.dto';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  message: string;
  class: string;
  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private formBuilder: FormBuilder) { this.loginForm = this.createFormGroupWithBuilderAndModel(formBuilder);
  }

  ngOnInit(): void {
  }
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      dni: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void {
    this.isLoading = true;
    this.loginService.login(this.loginForm.value).subscribe(data => {
      this.isLoading = false;
      this.loginService.addCurrentUser(data);
      this.router.navigate(['/bank']);

    }, error => {
      this.message = error.error.message;
      this.class = 'bg-danger text-light';
      this.isLoading = false;
    });
  }

}
