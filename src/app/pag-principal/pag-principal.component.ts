import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Certificado } from '../Modelos/Modelo';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  vacio:string= "Verfique si la información es Correcta!"
  constructor(private servicio: ServiciosService, private form: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.form_validar = this.form.group({
      codigo: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }
  async getCertificado(codigo) {
    await this.servicio.obtenerdatos(this.Certificado).subscribe(
      data => {
        this.Datos = data
        if (this.Datos.length === 1) {
          this.router.navigate(['verCertificado',codigo.value])
        } else {
          this.openSnackBar(this.vacio)
        }
      },
      err => console.log(err)
    )
  }
  
  get codigo() { return this.form_validar.get('codigo') }

  
  showModal() {
    document.getElementById('modal').style.display = "block"
  }

  pagUser() {
    this.router.navigate(['newUser'])
  }
  pagCertifi() {
    this.router.navigate(['newCertifi'])
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', { duration: 2000 });
  }
}
