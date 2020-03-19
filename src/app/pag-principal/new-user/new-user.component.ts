import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/Modelos/user';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public User:User={
    dni: "",
    names: "",    
    genero: "",
    telefono: "",
    role: "", 
    password: ""
  }
  public role:any=[]
  public user:any=[]
  public error:string
  public save:string
  public form_user:FormGroup
  constructor(private router:Router,private form:FormBuilder,private service:ServiciosService) {
    this.form_user=this.form.group({
      dni:"",
      names:"",
      password:"",
      role:"",
      genero:"",
      telefono:""
    })
   }

  ngOnInit(): void {
    this.getRole()
  }
  getRole(){
    this.service.getRole().subscribe(data=>{
      this.role=data
      console.log(this.role)
    })
  }
  newUser(){
    console.log(this.User)
    this.service.postUser(this.User).subscribe(data=>{
      console.log(data)
      this.user=data
      if(this.user.mensaje=="cedula_existe"){
        this.error="La identificación ya existe"
        document.getElementById('error').style.display="block"
      }else if(this.user.mensaje=="cedula_incorrecta"){
        this.error="La cédula ingresada es incorrecta"
        document.getElementById('error').style.display="block"
      }else if(this.user.length===1){
        this.save='Se ha guardado Correctamente'
        document.getElementById('save').style.display="block"
      }
    })
  }
}
