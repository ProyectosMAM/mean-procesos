import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modal
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { MaestroComponent } from './components/maestro/maestro.component';
import { TablaProcesosComponent } from './shared/tabla-procesos/tabla-procesos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddeditComponent } from './components/addedit/addedit.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    MaestroComponent,
    TablaProcesosComponent,
    FooterComponent,
    NavbarComponent,
    AddeditComponent,
    InicioComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
