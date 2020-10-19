import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CustomerDto} from '../../../../dto/Customer.dto';
import {TransactionTypesDto} from '../../../../dto/TransactionTypesDto';
import {TransactionService} from '../../../../services/transaction.service';
import {LoginService} from '../../../../services/login.service';
import {TransactionDto} from '../../../../dto/Transaction.dto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private transactionService: TransactionService,
              private loginService: LoginService) {
    this.transactionForm = this.createFormGroupWithBuilderAndModel(formBuilder);
  }

  transactionTypes: TransactionTypesDto[] = [];
  currentUser: CustomerDto;
  transactionForm: FormGroup;
  transactionTypeStr = '';
  selectedType = 'CARGA_SALDO';
  @Output() transactionEmitter = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.currentUser = this.loginService.currentCustomer;
    this.getAllTransactionTypes();
  }

  // tslint:disable-next-line:typedef
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      transactionDto: new FormGroup({
        customerDto: formBuilder.group(new CustomerDto()),
        amount: new FormControl(),
        transactionType: new FormControl(),
        dniDestiny: new FormControl(),
      })
    });
  }

  onSubmit(): void {
    this.transactionForm.value.transactionDto.amount = Number(this.transactionForm.value.transactionDto.amount);
    this.transactionForm.value.transactionDto.transactionType = this.selectedType;
    this.transactionForm.value.transactionDto.customerDto = this.currentUser;
    const transactionDto: TransactionDto = this.transactionForm.value.transactionDto;
    console.log(JSON.stringify(this.transactionForm.value));
    this.transactionService.saveTransaction(this.transactionForm.value.transactionDto).subscribe(data => {
      console.log(data);
      this.transactionEmitter.emit(true);
    }, error => {
      console.log(error);
    });
  }

  getAllTransactionTypes(): void {
    this.transactionService.getAllTransactionsTypes().subscribe(data => {
      this.transactionTypes = data;
    }, error => {
      console.log(error);
    });
  }
}
