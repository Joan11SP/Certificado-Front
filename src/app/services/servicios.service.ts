import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificado } from '../Modelos/Modelo';
import {  Login } from '../Modelos/Login';
import { newCertificado } from '../Modelos/certificado';
import { User } from '../Modelos/user';
import { Users } from '../Modelos/Users';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  constructor(private http: HttpClient) {
    
   }
   //heroku="http://localhost:3000/api/"
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
   getOneCertifi(){
     return this.http.get<any>(`${this.heroku}datos_certificado/searchCertifi`)
   }
   getOnePerson(){
     return this.http.get<any>(`${this.heroku}datos_usuario/searchPerson`)
   }
   updateUser(user:User){
    return this.http.post(`${this.heroku}datos_usuario/updatePerson`,user)
   }
   deletePerson(delet:Users){
     return this.http.post(`${this.heroku}datos_usuario/deletePerson`,delet)
   }
   updateCertifi(certificado:newCertificado){
     return this.http.post(`${this.heroku}datos_certificado/updateCertifi`,certificado)
   }
   deleteCertifi(codigo:Certificado){
     return this.http.post(`${this.heroku}datos_certificado/deleteCertifi`,codigo)
   }
}
