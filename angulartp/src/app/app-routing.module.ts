import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { AgregarcursoComponent } from './agregarcurso/agregarcurso.component';


const routes: Routes = [
  {path: 'cursos', component:CursosComponent},
  {path: 'agregarcurso', component:AgregarcursoComponent },
  {path:'**', pathMatch:'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
