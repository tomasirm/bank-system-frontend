import {Component, Input, OnInit} from '@angular/core';
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

  @Input() currentUser: CustomerDto;
  ngOnInit(): void {
  }

  onClick() {
    this.modal.open(ModalComponent, { size: 'lg' });
  }

}
