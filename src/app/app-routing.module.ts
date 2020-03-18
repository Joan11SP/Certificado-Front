import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { VercertificadoComponent } from './vercertificado/vercertificado.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from '../app/guards/auth.guard'

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:"home",component:PagPrincipalComponent,canActivate:[AuthGuard]},
  {path:"verCertificado",component:VercertificadoComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
