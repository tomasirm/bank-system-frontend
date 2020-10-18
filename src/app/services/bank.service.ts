import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient,
              private router: Router) {
  }
  ENDPOINT_URL = 'http://localhost:3000/';

  getTransactions(dni: string): Observable<any>{
    return this.http.get(this.ENDPOINT_URL + 'transaction/' + dni);
  }
  getbalance(dni: string): Observable<any>{
    return this.http.get(this.ENDPOINT_URL + 'customer/balance/' + dni);
  }
}
