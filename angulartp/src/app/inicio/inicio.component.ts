import { Component } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  estadobotoncursos: boolean= false;
  estadobotonNewcursos: boolean= false;

  texto: string ="Ver Cursos";
  txtbtnbew: string = "Agregar un nuevo curso";

  txtboton(){
    this.estadobotoncursos = !this.estadobotoncursos;
    this.texto = this.estadobotoncursos ?  "Ocultar Cursos":"Ver Cursos" ;
  }
  txtbtnnew(){
    this.estadobotonNewcursos = !this.estadobotonNewcursos;
    this.txtbtnbew = this.estadobotonNewcursos ? "Cerrar": "Agregar un nuevo curso" ;
 
  }


}
