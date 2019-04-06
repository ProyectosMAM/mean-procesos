import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { ProcesoService } from '../../services/proceso.service';
import { NgForm } from '@angular/forms';
import { Proceso } from '../../models/proceso';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  public selectedProceso: Proceso;
  public procesos: Proceso[];

  constructor(
    public activeModal: NgbActiveModal,private procesoService: ProcesoService, public modalService: NgbModal
  ) { }

  ngOnInit() {
    console.log(this.user);
    this.selectedProceso = this.procesoService.selectedProceso;
  }

  // passBack() {
  //   this.passEntry.emit(this.user);
  // }

  getProcesos() {
    this.procesoService.getProcesos().subscribe(res => {
      this.procesos = res as Proceso[];
    });
  }

  addProceso(form?: NgForm) {
    if (form.value._id) {
      console.log('Se ha pulsado grabar con ID. Para editar.' + form.value._id);
      this.procesoService.putProceso(form.value).subscribe(res => {
        // this.resetForm(form);
        this.getProcesos();

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Actualización correcta.',
          showConfirmButton: false,
          timer: 2500
        });
      });
    } else {
      console.log('Se ha pulsado grabar sin ID. Para añadir.');
      this.procesoService.postProceso(form.value).subscribe(res => {
        this.resetForm(form);
        this.getProcesos();

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Guardado correctamente.',
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.procesoService.selectedProceso = new Proceso();
  }
  }

}

