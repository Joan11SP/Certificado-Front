import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Certificado } from '../Modelos/Modelo';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { $ } from 'protractor';
@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {
  User: any = []
  Datos: any = []
  Certificado: Certificado = {
    codigo: ""
  }
  form_validar: FormGroup;
  vacio
  constructor(private servicio: ServiciosService, private form: FormBuilder, private router: Router) {
    this.form_validar = this.form.group({
      codigo: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }
  async getCertificado() {
    await this.servicio.obtenerdatos(this.Certificado).subscribe(
       data => {
        this.User = localStorage.setItem("usuarios", JSON.stringify(data))
        this.Datos = data
        if(this.Datos.length===1){
          console.log(this.Datos)
          this.router.navigate(['verCertificado'])
        }else{
          this.vacio="Verfique si la información es Correcta!"
          document.getElementById('alert').style.display = 'block'        
        }
      },
      err => console.log(err)
    )
  }
  get codigo() { return this.form_validar.get('codigo') }

  getUser() {
  }
  showModal(){
    document.getElementById('modal').style.display="block"
  }
}
