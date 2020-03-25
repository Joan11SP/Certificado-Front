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
  Image:any={
    nombre:"",
    photo:null
  }
  form_validar: FormGroup;
  form_image:FormGroup;
  vacio:string= "Verfique si la información es Correcta!"
  file :File
  photoSelected
  constructor(private servicio: ServiciosService, private form: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.form_validar = this.form.group({
      codigo: ["", Validators.required]
    })
    this.form_image=this.form.group({
      nombre:["",Validators.required],
      photo:[null,Validators.required]
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
  photoSelect(event){
    const photo = event.target.files
    if(event.target.files && event.target.files[0]){
      this.file = <File>photo[0]
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result
      reader.readAsDataURL(this.file)
      console.log(this.file)
    }
  }
  sendPhoto(nombre){
    this.servicio.postImages(nombre.value,this.file).subscribe(data=>{
      this.User=data
      console.log(data)
      if(this.User.mensaje=="guardado"){
        this.openSnackBar('Se guardo Correctamente')
        this.form_image.reset()
        this.photoSelected=false
      }
    })
  }
  cancel(){
    this.photoSelected=false
  }
}
