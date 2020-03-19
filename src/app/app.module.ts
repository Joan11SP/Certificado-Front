import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VercertificadoComponent } from './vercertificado/vercertificado.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NewUserComponent } from './pag-principal/new-user/new-user.component';
import { NewCertificadoComponent } from './pag-principal/new-certificado/new-certificado.component';

@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    VercertificadoComponent,
    LoginComponent,
    NewUserComponent,
    NewCertificadoComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
