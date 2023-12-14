import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarcursoComponent } from './agregarcurso/agregarcurso.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncabezadoComponent,
    PiepaginaComponent,
    CursosComponent,
    AgregarcursoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
