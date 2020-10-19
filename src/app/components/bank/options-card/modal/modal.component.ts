import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  alert = {message: '', style: ''};
  submitted = false;
  loading = false;
  @Output() transactionEmitter = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.currentUser = this.loginService.currentCustomer;
    this.getAllTransactionTypes();
  }

  // tslint:disable-next-line:typedef
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
        customerDto: formBuilder.group(new CustomerDto()),
        amount: new FormControl('', Validators.required),
        transactionType: new FormControl(),
        dniDestiny: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.transactionForm.value.amount = Number(this.transactionForm.value.amount);
    this.transactionForm.value.transactionType = this.selectedType;
    this.transactionForm.value.customerDto = this.currentUser;
    const transactionDto: TransactionDto = this.transactionForm.value;
    this.loading = true;
    this.transactionService.saveTransaction(this.transactionForm.value).subscribe(data => {
      this.loading = false;
      this.alert.message = data.message;
      this.alert.style = 'success';
      this.transactionEmitter.emit(true);
    }, error => {
      this.alert.message = error.error.message;
      this.loading = false;
      this.alert.style = 'danger';
      console.log(error);
    });
  }

  getAllTransactionTypes(): void {
    this.transactionService.getAllTransactionsTypes().subscribe(data => {
      this.transactionTypes = data;
      this.transactionTypes = this.transactionTypes.filter(transactionType => transactionType.name !== 'TRANSFERENCIA_DE_TERCEROS');
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  get f() { return this.transactionForm.controls; }
}
