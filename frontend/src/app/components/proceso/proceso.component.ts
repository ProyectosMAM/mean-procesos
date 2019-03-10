import { Component, OnInit } from '@angular/core';

import { ProcesoService } from '../../services/proceso.service';
import { NgForm } from '@angular/forms';
import { Proceso } from '../../models/proceso';

declare var M: any;

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css'],
  providers: [ ProcesoService ]
})
export class ProcesoComponent implements OnInit {

  constructor(private procesoService: ProcesoService) { }

  ngOnInit() {
    this.getProcesos();
  }

  addProceso(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.procesoService.putProceso(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProcesos();
          M.toast({html: 'Actualización correcta.'});
        });
    } else {
      this.procesoService.postProceso(form.value)
      .subscribe(res => {
        this.getProcesos();
        this.resetForm(form);
        M.toast({html: 'Guardado correctamente.'});
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
    if(confirm('¿Estas seguro de que quierez boorar este proceso?')) {
      this.procesoService.deleteProceso(_id)
        .subscribe(res => {
          this.getProcesos();
          this.resetForm(form);
          M.toast({html: 'Borrado correcto.'});
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
