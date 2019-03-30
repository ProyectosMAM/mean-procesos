import { Component, OnInit } from '@angular/core';

import { ProcesoService } from '../../services/proceso.service';
import { NgForm } from '@angular/forms';
import { Proceso } from '../../models/proceso';

// TODO: Solucionar problema con SweetAlert.
// import Swal from 'sweetalert2';

declare var M: any;
// const Swal: any = require('sweetalert2');

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css'],
  providers: [ ProcesoService ]
})
export class AddeditComponent implements OnInit {

  constructor(private procesoService: ProcesoService) { }

  ngOnInit() {
    this.getProcesos();
  }

  addProceso(form?: NgForm) {
    if (form.value._id) {
      console.log('Se ha pulsado grabar con ID. Para editar.' + form.value._id);
      this.procesoService.putProceso(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProcesos();
          // M.toast({html: 'Actualización correcta.'});
          // Swal.fire({
          //   position: 'top-end',
          //   type: 'success',
          //   title: 'Actualización correcta.',
          //   showConfirmButton: false,
          //   timer: 1500
          // });
        });
    } else {
      console.log('Se ha pulsado grabar sin ID. Para añadir.');
      this.procesoService.postProceso(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProcesos();
      // M.toast({html: 'Guardado correctamente.'});
      // Swal.fire({
      //   position: 'top-end',
      //   type: 'success',
      //   title: 'Guardado correctamente.',
      //   showConfirmButton: false,
      //   timer: 1500
      // });
    });
    }
  }

  getProcesos() {
    this.procesoService.getProcesos()
      .subscribe(res => {
        this.procesoService.procesos = res as Proceso[];
      });
  }

  editProceso(proceso: Proceso) {
    this.procesoService.selectedProceso = proceso;
  }

  deleteProceso(_id: string, form: NgForm) {
    if (confirm('¿Estas seguro de que quieres borrar este proceso?')) {
      this.procesoService.deleteProceso(_id)
        .subscribe(res => {
          this.getProcesos();
          this.resetForm(form);
          // M.toast({html: 'Borrado correcto.'});
          // Swal.fire({
          //   position: 'top-end',
          //   type: 'success',
          //   title: 'El proceso ha sido borrado',
          //   showConfirmButton: false,
          //   timer: 1500
          // });
        });
    }
  }

  viewProceso(proceso: Proceso) {
    console.log('viewProceso');
    this.procesoService.selectedProceso = proceso;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.procesoService.selectedProceso = new Proceso();
      this.getProcesos();
    }
  }




}
