import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { ProcesoDetallesComponent } from './components/proceso-detalles/proceso-detalles.component';
import { ProcesoAddEditComponent } from './components/proceso-add-edit/proceso-add-edit.component';
import { ProcesosLinea1Component } from './components/procesos-linea1/procesos-linea1.component';
import { TablaProcesosComponent } from './shared/tabla-procesos/tabla-procesos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesoComponent,
    ProcesoDetallesComponent,
    ProcesoAddEditComponent,
    ProcesosLinea1Component,
    TablaProcesosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
