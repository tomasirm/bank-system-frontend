import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TransactionDto} from '../dto/Transaction.dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ENDPOINT_URL = environment.ENDPOINTS.API;

  getAllTransactionsTypes(): Observable<any> {
    return this.http.get(this.ENDPOINT_URL + 'transaction-types');
  }

  saveTransaction(transactionDto: TransactionDto): Observable<any> {
    return this.http.post(this.ENDPOINT_URL + 'transaction', transactionDto);
  }
}
