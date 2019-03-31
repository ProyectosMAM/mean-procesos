import { Component, OnInit } from '@angular/core';

import { ProcesoService } from '../../services/proceso.service';
import { Proceso } from '../../models/proceso';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css'],
  providers: [ProcesoService]
})
export class MaestroComponent implements OnInit {
  constructor(private procesoService: ProcesoService) { }

  ngOnInit() {
    this.getProcesos();
  }

 // TODO: Esta misma funcion esta en addedit.component.ts
 // Andres me comenta que no conoce forma de tenerla unificada en un solo lugar.
  getProcesos() {
    this.procesoService.getProcesos().subscribe(res => {
      this.procesoService.procesos = res as Proceso[];
    });
  }
}
