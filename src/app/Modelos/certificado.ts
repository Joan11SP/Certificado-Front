export interface newCertificado {
    _id:string,
    codigo: string,
    names: string,
    dni: string,
    name_carrer: string, //aquí tienes que consumir el recurso de carreras y enviar el id de la carrera
    name_project: string,
    barrio: string,
    parroquia: string,
    canton: string,
    horas: number,
    date_inicio: string,
    date_fin: string

}