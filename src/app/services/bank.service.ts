import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient,
              private router: Router) {
  }
  ENDPOINT_URL = environment.ENDPOINTS.API;

  getTransactions(dni: string): Observable<any>{
    return this.http.get(this.ENDPOINT_URL + 'transaction/' + dni);
  }
  getbalance(dni: string): Observable<any>{
    return this.http.get(this.ENDPOINT_URL + 'customer/balance/' + dni);
  }
}
