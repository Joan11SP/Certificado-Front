import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';
import { Login } from '../Modelos/Login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  error: string="Datos Incorrectos"
  form_logeo: FormGroup

  constructor(private router: Router, private servicio: ServiciosService, private form: FormBuilder, private snackBar: MatSnackBar) {
    this.form_logeo = this.form.group({
      dni: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    localStorage.clear()
  }
  getLogin() {
    console.log(this.logeo)
    this.servicio.getLogin(this.logeo).subscribe(res => {
      this.Login = res
      console.log(this.Login.mensaje)
      if (this.Login.length === 1) {
        this.Login.forEach(element => {
          console.log(element.role)
          if (element.role == "1") {
            this.router.navigate(['home'])
            localStorage.setItem('sesion', JSON.stringify(res));
          }
        });
      }      
      if (this.Login.mensaje == "incorrect") {
        this.openSnackBar(this.error)
      }

    })
  }
  getData(): boolean {
    var token = JSON.parse(localStorage.getItem("sesion"));
    return token
  }

  openSnackBar(message) {
    this.snackBar.open(message, '', { duration: 2000 });
  }
}
