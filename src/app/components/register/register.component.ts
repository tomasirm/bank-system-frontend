import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder) { this.registerForm = this.createFormGroupWithBuilderAndModel(formBuilder); }
  isLoading = false;
  message: string;
  class: string;
  registerForm: FormGroup;
  submitted = false;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      dni: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      names: new FormControl('', Validators.required),
      surnames: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    this.isLoading = true;
    this.loginService.register(this.registerForm.value).subscribe(data => {
      this.isLoading = false;
      this.message = 'Cliente registrado con exito';
      this.class = 'bg-info text-light';
    }, error => {
      this.isLoading = false;
      this.message = error.error.message;
      this.class = 'bg-danger text-light';
      console.log(error);
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirm_password').value) {
      return {invalid: true};
    }
  }
}
