import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificado } from '../Modelos/Modelo';
import {  Login } from '../Modelos/Login';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {
    
   }

   heroku="https://certificado-nodejs.herokuapp.com/api/"
   
   obtenerdatos(codigo:Certificado){
     return this.http.post(`${this.heroku}datos_certificado/searchCertifi`,codigo)
   }
   getLogin(login:Login){
     return this.http.post(`${this.heroku}datos_usuario/getLogin`,login)
   }
}
