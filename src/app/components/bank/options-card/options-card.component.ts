import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';
import {CustomerDto} from '../../../dto/Customer.dto';

@Component({
  selector: 'app-options-card',
  templateUrl: './options-card.component.html',
  styleUrls: ['./options-card.component.css']
})
export class OptionsCardComponent implements OnInit {

  constructor(private modal: NgbModal) { }
  @Output() transactionEmitter = new EventEmitter<boolean>();
  @Input() currentUser: CustomerDto;
  ngOnInit(): void {
  }

  onClick() {
    const modalRef = this.modal.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.transactionEmitter.subscribe((event) => {
    if (event){
      this.transactionEmitter.emit(true);
    }
    });
  }

}
