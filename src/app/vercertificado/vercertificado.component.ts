import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ServiciosService } from '../services/servicios.service';
import { Certificado } from '../Modelos/Modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-vercertificado',
  templateUrl: './vercertificado.component.html',
  styleUrls: ['./vercertificado.component.css']
})
export class VercertificadoComponent implements OnInit {
  Usuario: any = []
  fechaactual
  Certificado: Certificado = {
    codigo: ""
  }
  Images: any = []
  Image:any={
    _id:""
  }
  form_image:FormGroup
  viewPhoto:any=[]
  viewPhoto2:any=[]
  viewPhoto3:any=[]
  constructor(private form:FormBuilder, private router: Router, private routerActivated: ActivatedRoute, private servicio: ServiciosService) { 
    this.form_image=this.form.group({
      _id:[""]
    })
  }

  ngOnInit(): void {
    this.getId()
    this.getImage()
  }
  getId() {
    //ger Certifi
    this.routerActivated.params.subscribe(params => {
      this.Certificado.codigo = params['id']
    })
    this.servicio.obtenerdatos(this.Certificado).subscribe(
      data => this.Usuario = data
    )
    this.fechaactual = moment().format('DD/MM/YYYY')
  }
  getImage() {
    //get Images
    this.servicio.getImages().subscribe(data => {
      this.Images = data
    })
  }

  print() {

    window.print();
    return true;
  }
  volver() {
    localStorage.removeItem('usuarios');
    this.router.navigate(['home'])
  }
  getOnePhoto(event){
    this.Image._id=event.target.value
    this.servicio.postOneImage(this.Image).subscribe(data=>{
     this.viewPhoto=data
     
    })
  }
  getOnePhoto2(event){
    this.Image._id=event.target.value
    this.servicio.postOneImage(this.Image).subscribe(data=>{
      this.viewPhoto2=data
    })
  }
  getOnePhoto3(event){
    this.Image._id=event.target.value
    this.servicio.postOneImage(this.Image).subscribe(data=>{
      this.viewPhoto3=data
      
    })
  }

}
