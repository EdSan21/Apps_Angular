import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ArtistaComponent } from './Pages/artista/artista.component';
import { BusquedaComponent } from './Pages/busqueda/busqueda.component';
import { SharedComponent } from './Pages/shared/shared.component';
import { TarjetasComponent } from './Pages/tarjetas/tarjetas.component';
import { NavbarComponent } from './Pages/shared/navbar/navbar.component';
import { LoadingComponent } from './Pages/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomsdeguroPipe } from './pipes/domsdeguro.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    BusquedaComponent,
    SharedComponent,
    TarjetasComponent,
    NavbarComponent,
    LoadingComponent,
    NoimagePipe,
    DomsdeguroPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
