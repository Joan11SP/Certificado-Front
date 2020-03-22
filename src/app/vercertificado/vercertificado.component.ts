import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-vercertificado',
  templateUrl: './vercertificado.component.html',
  styleUrls: ['./vercertificado.component.css']
})
export class VercertificadoComponent implements OnInit {
  Usuario: any = []
  fechaactual
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.Usuario = JSON.parse(localStorage.getItem("usuarios"))
    this.fechaactual = moment().format('DD/MM/YYYY')
    console.log(this.fechaactual)
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
