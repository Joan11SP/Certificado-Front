import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { newCertificado } from 'src/app/Modelos/certificado';

@Component({
  selector: 'app-new-certificado',
  templateUrl: './new-certificado.component.html',
  styleUrls: ['./new-certificado.component.css']
})
export class NewCertificadoComponent implements OnInit {
  Certificado: newCertificado = {
    codigo: "",
    names: "",
    dni: "",
    name_carrer: "",
    name_project: "",
    barrio: "",
    parroquia: "",
    canton: "",
    horas: null,
    date_inicio: null,
    date_fin: null
  }
  carrera: any = []
  form_certifi: FormGroup
  constructor(private router: Router, private form: FormBuilder, private service: ServiciosService) {
    this.form_certifi = this.form.group({
      codigo: "",
      names: "",
      dni: "",
      name_carrer: "",
      name_project: "",
      barrio: "",
      parroquia: "",
      canton: "",
      horas: null,
      date_inicio: null,
      date_fin: null
    })
  }

  ngOnInit(): void {
    this.getCarreras()
  }
  getCarreras() {
    this.service.getCarreras().subscribe(data => {
      this.carrera = data
      console.log(this.carrera)
    })
  }
  newCertificado() {
    console.log(this.Certificado)
    
  }
}
