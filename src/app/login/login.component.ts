import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';
import { Login } from '../Modelos/Login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logeo:Login={
    dni:"",
    password:""
  }
  Login:any=[]
  error:string
  form_logeo:FormGroup
  constructor(private router:Router,private servicio:ServiciosService,private form:FormBuilder) {
    this.form_logeo=this.form.group({
      dni:["",Validators.required],
      password:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }
  getLogin(){
    this.servicio.getLogin(this.logeo).subscribe(res=>{
      this.Login=res
      if(this.Login.mensaje==="Correcto"){
        this.router.navigate(['home'])        
      }else{
        this.error="Datos Incorrectos"
      }
    })
  }
}
