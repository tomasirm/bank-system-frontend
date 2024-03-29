import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {CustomerDto} from '../dto/Customer.dto';
import {LoginDto} from '../dto/Login.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
  }

  ENDPOINT_URL = environment.ENDPOINTS.API;
  private currentUserSubject: BehaviorSubject<any>;

  register(customerDto: CustomerDto): Observable<any> {
    return this.http.post(this.ENDPOINT_URL + 'customer/register', customerDto);
  }

  login(loginDto: LoginDto): Observable<any> {
    return this.http.post(this.ENDPOINT_URL + 'customer/login', loginDto);
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  public get currentCustomer(): any {
    return this.currentUserSubject.value.customerDto;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
  }

  addCurrentUser(user: any): void{
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

}
