import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewcursosService } from '../servicioa/newcursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {


  constructor (public newcursosService: NewcursosService){   }

  mostrarComponente = true;

  ocultarComponente() {
    this.mostrarComponente = false;
  }

  
}
