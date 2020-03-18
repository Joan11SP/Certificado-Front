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
  logeo: Login = {
    dni: "",
    password: ""
  }
  Login: any = []
  error: string
  form_logeo: FormGroup
  constructor(private router: Router, private servicio: ServiciosService, private form: FormBuilder) {
    this.form_logeo = this.form.group({
      dni: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    localStorage.clear()
  }
  getLogin(): Login {
    this.servicio.getLogin(this.logeo).subscribe(res => {
      this.Login = res
      this.Login.forEach(element => {
        if (element.role === "1") {
          this.router.navigate(['home'])
          localStorage.setItem('sesion', JSON.stringify(res));
          return true;
        } else {
          this.error = "Datos Incorrectos"
          return false;
        }
      });

    })
    return this.logeo
  }
  getData(): boolean {
    var token = JSON.parse(localStorage.getItem("sesion"));
    return token
  }
}
