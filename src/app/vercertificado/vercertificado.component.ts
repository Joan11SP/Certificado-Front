import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import * as moment from 'moment';
import { ServiciosService } from '../services/servicios.service';
import { Certificado } from '../Modelos/Modelo';
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
  noSelected:number
  constructor(private router: Router,private routerActivated:ActivatedRoute,private servicio:ServiciosService) { }

  ngOnInit(): void {
    
    this.routerActivated.params.subscribe(params=>{
      if(params['id']==""){
        this.noSelected=0
      }
      this.Certificado.codigo=params['id']      
    })
      this.servicio.obtenerdatos(this.Certificado).subscribe(
        data=>this.Usuario=data
      )         
      this.fechaactual = moment().format('DD/MM/YYYY')          
  }

  print() {
     
    window.print();
    return true;
  }
  volver() {
    localStorage.removeItem('usuarios');
    this.router.navigate(['home'])
  }

}
