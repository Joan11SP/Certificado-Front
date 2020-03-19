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
  public certifi:any=[]
  public error:string
  public save:string
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
    this.service.postCertifi(this.Certificado).subscribe(data=>{
      this.certifi=data
      console.log(data)
      if(this.certifi.mensaje=="cedula_existe"){
        this.error="La identificación ya existe"
        document.getElementById('error').style.display="block"
      }else if(this.certifi.mensaje=="cedula_incorrecta"){
        this.error="La cédula ingresada es incorrecta"
        document.getElementById('error').style.display="block"
      }else if(this.certifi.length===1){
        this.save='Se ha guardado Correctamente'
        document.getElementById('save').style.display="block"
      }
    })
  }
}
