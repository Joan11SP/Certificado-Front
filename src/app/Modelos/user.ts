export interface User {
    _id:string,
    names: string,
    dni: string,
    genero: string
    telefono: string,
    role: string, //debes consumir los roles y enviar solo el id del role
    password: string

}