import { Component } from '@angular/core';
import { NewcursosService } from '../servicioa/newcursos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregarcurso',
  templateUrl: './agregarcurso.component.html',
  styleUrls: ['./agregarcurso.component.css']
}) 
export class AgregarcursoComponent {

  constructor (public newcursosService: NewcursosService){   }

  cursos = {
    name: '',
    description: '',
    duration: '',
    id: 0
  };


  agregarcurso(){
    this.newcursosService.new(this.cursos);
  }

  mostrarComponente = true;

  ocultarComponente() {
    this.mostrarComponente = false;
  }


}
 