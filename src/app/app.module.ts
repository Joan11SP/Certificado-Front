import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDatos1Component } from './form-datos1/form-datos1.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VercertificadoComponent } from './vercertificado/vercertificado.component';

@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    FormDatos1Component,
    VercertificadoComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
