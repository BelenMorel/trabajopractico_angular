import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewcursosService {

  constructor() { }

  cursos: any[] = [
    { id: 1, name: 'Inglés', description: 'Modalidad Presencial. Valor $3000', duration: '1 año' },
    { id: 2, name: 'Español', description: 'Modalidad Virtual. Valor $5000', duration: '2 años' }
  ];


  new(nuevocurso: any){
    this.cursos.push(nuevocurso)
  }
}
