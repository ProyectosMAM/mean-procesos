import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { MaestroComponent } from './components/maestro/maestro.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const app_routes: Routes = [
    { path: 'home', component: AppComponent, pathMatch: 'full'},
    { path: 'maestro', component: MaestroComponent },
    { path: 'addedit', component: ProcesoComponent },
    { path: 'ficha', component: DetalleComponent },
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


