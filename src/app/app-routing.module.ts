import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { VercertificadoComponent } from './vercertificado/vercertificado.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:PagPrincipalComponent},
  {path:"verCertificado",component:VercertificadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
