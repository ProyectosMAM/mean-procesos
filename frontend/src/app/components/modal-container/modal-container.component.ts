import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  // public user = {
  //   name: 'Miguel Angel Martinez',
  //   age: 61
  // };
  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  // openModal() {
  //   const modalRef = this.modalService.open(ModalContentComponent);
  //   modalRef.componentInstance.user = this.user;
  // }

}
