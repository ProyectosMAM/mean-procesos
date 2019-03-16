import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { ProcesoDetallesComponent } from './components/proceso-detalles/proceso-detalles.component';
import { ProcesoAddEditComponent } from './components/proceso-add-edit/proceso-add-edit.component';
import { ProcesosLinea1Component } from './components/procesos-linea1/procesos-linea1.component';

const app_routes: Routes = [
    { path: 'home', component: ProcesoComponent },
    { path: 'detalles', component: ProcesoDetallesComponent },
    { path: 'addedit', component: ProcesoAddEditComponent },
    { path: 'linea1', component: ProcesosLinea1Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }


