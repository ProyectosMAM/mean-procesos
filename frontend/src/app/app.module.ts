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
import { DetalleComponent } from './components/detalle/detalle.component';
import { ProcesoAddEditComponent } from './components/proceso-add-edit/proceso-add-edit.component';
import { MaestroComponent } from './components/maestro/maestro.component';
import { TablaProcesosComponent } from './shared/tabla-procesos/tabla-procesos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesoComponent,
    ProcesoDetallesComponent,
    DetalleComponent,
    MaestroComponent,
    ProcesoAddEditComponent,
    TablaProcesosComponent,
    FooterComponent,
    NavbarComponent
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
