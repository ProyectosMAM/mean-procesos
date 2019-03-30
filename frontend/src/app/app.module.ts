import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    MaestroComponent,
    TablaProcesosComponent,
    FooterComponent,
    NavbarComponent,
    AddeditComponent
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
