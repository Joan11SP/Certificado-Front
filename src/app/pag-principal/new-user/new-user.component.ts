import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Modelos/user';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Users } from 'src/app/Modelos/Users';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public User: User = {
    _id: null,
    dni: "",
    names: "",
    genero: "",
    telefono: "",
    role: "",
    password: ""
  }
  public oneUser: Users = {
    dni: ""
  }
  form_search: FormGroup
  public role: any = []
  public user: any = []
  public error: string
  public save: string
  public oneuser: any = []
  public form_user: FormGroup
  constructor(private router: Router, private form: FormBuilder, private service: ServiciosService) {
    //sirve para agragar el form y poder obtener los datos del fomulario
    this.form_user = this.form.group({
      _id: [''],
      dni: ["", Validators.required],
      names: ["", Validators.required],
      password: ["", [Validators.required]],
      role: ["", Validators.required],
      genero: ["", Validators.required],
      telefono: ["", Validators.required]
    })
    this.form_search = this.form.group({
      dni: ""
    })
  }

  ngOnInit(): void {
    this.getRole()
    document.getElementById('error').style.display = "none"
    document.getElementById('save').style.display = "none"
    this.getOneUser()
  }
  //obtiene los roles de los usuarios
  getRole() {
    this.service.getRole().subscribe(data => {
      this.role = data
    })
  }
  //verifica cuando se debe actualizar o agregar usuarios
  newUser() {
    if (this.User._id === null) {
      this.saveUser()
      
    } else {
      this.updateUser()
      
    }
  }
  //Obtener todos los usuarios
  getOneUser() {
    this.service.getOnePerson().subscribe(data => {
      this.oneuser = data
    })
  }
  datos_usuario(user: User) {
    this.User = Object.assign({}, user)
  }
  //Eliminar un Usuario
  deletePerson() {
    this.service.deletePerson(this.User).subscribe(data => {
      this.oneuser = data
      if (this.oneuser.deletedCount === 1) {
        this.save = "Se elimino Correctamente"
        this.form_user.reset()
        this.getOneUser()
      }
      else {
        this.error = "No se encontro tal Usuario"
        document.getElementById('error').style.display = "block"
      }
    })
  }
  //Actualizar un registro de Usuario
  updateUser() {
    this.service.updateUser(this.User).subscribe(data => {
      this.user = data
      if (this.user.mensaje == "cedula_existe") {
        this.error = "La identificación ya existe"
        document.getElementById('error').style.display = "block"

      } else if (this.user.nModified === 1) {        
        this.form_user.reset()
        this.save = 'Se ha modificado Correctamente'
        document.getElementById('save').style.display = "block"
        this.getOneUser()
      }
    })
  }
  // Guardar un nuevo Usuario
  saveUser() {
    this.service.postUser(this.User).subscribe(data => {
      console.log(data)
      this.user = data
      if (this.user.mensaje == "cedula_existe") {
        this.error = "La identificación ya existe"
        document.getElementById('error').style.display = "block"
      } else if (this.user.mensaje == "cedula_incorrecta") {
        this.error = "La cédula ingresada es incorrecta"
        document.getElementById('error').style.display = "block"
      } else if (this.user.length === 1) {
        this.save = 'Se ha guardado Correctamente'
        this.getOneUser()        
        document.getElementById('save').style.display = "block"
      }
    })
  }
  openModal(){
    this.form_user.reset()
  }
  //metodos para el form y validar si un campo esta vacio.
  get dni() { return this.form_user.get('dni') }
  get names() { return this.form_user.get('names') }
  get genero() { return this.form_user.get('genero') }
  get telefono() { return this.form_user.get('telefono') }
  get password() { return this.form_user.get('password') }
  get roles() { return this.form_user.get('role') }
}
