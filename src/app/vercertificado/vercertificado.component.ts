import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vercertificado',
  templateUrl: './vercertificado.component.html',
  styleUrls: ['./vercertificado.component.css']
})
export class VercertificadoComponent implements OnInit {
  Usuario:any=[]
  fechaactual
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.Usuario=JSON.parse(localStorage.getItem("usuarios"))
    var fecha=new Date()
    var dia =fecha.getDay()
    var mes = fecha.getUTCMonth()
    var anio = fecha.getFullYear()
    this.fechaactual = `${dia}/${mes}/${anio}` ;
    console.log(`${dia}/${mes}/${anio}`)

  }

  print(){
    window.print()
  }
  volver(){
    localStorage.clear();
    this.router.navigate(['home'])
  }

}
