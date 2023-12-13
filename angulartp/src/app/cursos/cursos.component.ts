import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {


  esVisible: boolean = false;
  titulo: any;
  descripcion: any;
  id: any;
  duracion: any;
  cursos: any[] = []; // Agregar este array

  mostrarCard() {
    this.esVisible = true;
  }

  ocultarCard() {
    this.esVisible = false;
  }

  agregarCurso() {
    // Validar que se ingresen todos los campos antes de agregar el curso
    if (this.titulo && this.descripcion && this.id && this.duracion) {
      const nuevoCurso = {
        titulo: this.titulo,
        descripcion: this.descripcion,
        id: this.id,
        duracion: this.duracion
      };

      this.cursos.push(nuevoCurso);
      this.ocultarCard(); // Oculta el formulario después de agregar el curso
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }
  }


  
}
