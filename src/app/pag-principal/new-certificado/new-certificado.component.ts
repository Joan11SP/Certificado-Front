import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newCertificado } from 'src/app/Modelos/certificado';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Certificado } from 'src/app/Modelos/Modelo';
import * as moment from 'moment';
import { $ } from 'protractor';
@Component({
  selector: 'app-new-certificado',
  templateUrl: './new-certificado.component.html',
  styleUrls: ['./new-certificado.component.css']
})
export class NewCertificadoComponent implements OnInit {
  Certificado: newCertificado = {
    _id:null,
    codigo: null,
    names: null,
    dni: null,
    name_carrer: null,
    name_project: null,
    barrio: null,
    parroquia: null,
    canton: null,
    horas: null,
    date_inicio: null,
    date_fin: null
  }
  public oneCertificado: Certificado = {
    codigo: ""
  }
  carrera: any = []
  public certifi: any = []
  public error: string
  public save: string
  public oneCertifi: any = []
  form_certifi: FormGroup
  form_search: FormGroup
  constructor(private router: Router, private form: FormBuilder, private service: ServiciosService) {
    this.form_certifi = this.form.group({
      _id:[""],
      codigo: ["", Validators.required],
      names: ["", Validators.required],
      dni: ["", Validators.required],
      name_carrer: ["", Validators.required],
      name_project: ["", Validators.required],
      barrio: ["", Validators.required],
      parroquia: ["", Validators.required],
      canton: ["", Validators.required],
      horas: [null, Validators.required],
      date_inicio: [null, Validators.required],
      date_fin: [null, Validators.required],
    })
    this.form_search = this.form.group({
      codigo: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.getCarreras()
    this.getOneCertifi()
    document.getElementById('error').style.display="none"      
    document.getElementById('save').style.display="none"
  }
  getCarreras() {
    this.service.getCarreras().subscribe(data => {
      this.carrera = data
    })
  }
  newCertificado() {    
    console.log(this.form_certifi.value)
    if (this.Certificado._id === null) {
      this.saveCertifi()
      
    } else {
      this.updateCertifi()
      
    }
  }
  getOneCertifi() {
    this.service.getOneCertifi().subscribe(data => {
      this.oneCertifi = data
    })
  }
  datos_certificados(certifi: newCertificado) {
    this.Certificado = Object.assign({}, certifi)
    this.Certificado.date_inicio = moment(certifi.date_inicio).format("YYYY-MM-DD");
    this.Certificado.date_fin = moment(certifi.date_fin).format("YYYY-MM-DD");
  }
  deleteCertificado() {
    console.log("hdsfasfsadas",this.Certificado)
    this.service.deleteCertifi(this.Certificado).subscribe(data => {
      this.oneCertifi = data
      if (this.oneCertifi.deletedCount === 1) {
        this.form_certifi.reset()
        this.getOneCertifi()
        this.save = "Se elimino correctamente"
      }
    })
  }
  updateCertifi(){
    this.service.updateCertifi(this.Certificado).subscribe(data => {
      this.certifi = data
      if(this.certifi.mensaje==="cedula_incorrecta"){
        this.error= "La cédula ingresada es incorrecta"
      }
      else if(this.certifi.nModified===1){
        this.form_certifi.reset()
        this.save="Actualizado Correctamente"
      }
    })
  }
  saveCertifi(){
    this.service.postCertifi(this.Certificado).subscribe(data => {
      this.certifi = data
      console.log(data)
      if (this.certifi.mensaje == "cedula_incorrecta") {
        this.error = "La cédula ingresada es incorrecta"
        document.getElementById('error').style.display = "block"
      }else if (this.certifi.mensaje == "codigo_existe") {
        this.error = "La código ingresado ya esta registrado"
        document.getElementById('error').style.display = "block"
      }else if (this.certifi.length === 1) {
        this.save = 'Se ha guardado Correctamente'
        this.form_certifi.reset()
        document.getElementById('save').style.display = "block"
      }
    })
  }
  openModal(){
    this.form_certifi.reset()
  }

  get codigo() { return this.form_certifi.get('codigo') }
  get dni() { return this.form_certifi.get('dni') }
  get names() { return this.form_certifi.get('names') }
  get name_carrer() { return this.form_certifi.get('name_carrer') }
  get name_project() { return this.form_certifi.get('name_project') }
  get barrio() { return this.form_certifi.get('barrio') }
  get parroquia() { return this.form_certifi.get('parroquia') }
  get canton() { return this.form_certifi.get('canton') }
  get horas() { return this.form_certifi.get('horas') }
  get date_inicio() { return this.form_certifi.get('date_inicio') }
  get date_fin() { return this.form_certifi.get('date_fin') }
}