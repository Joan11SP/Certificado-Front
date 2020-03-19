import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificado } from '../Modelos/Modelo';
import {  Login } from '../Modelos/Login';
import { newCertificado } from '../Modelos/certificado';
import { User } from '../Modelos/user';
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
   getCarreras(){
     return this.http.get(`${this.heroku}datos_certificado/searchCarrer`)
   }
   getRole(){
    return this.http.get(`${this.heroku}datos_usuario/searchRole`)
  }
   postCertifi(certificado:newCertificado){
    return this.http.post(`${this.heroku}datos_certificado/newCertifi`,certificado)
   }
   postUser(user:User){
    return this.http.post(`${this.heroku}datos_usuario/newPerson`,user)
   }
}
