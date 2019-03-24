import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //tareaPrueba: Tarea
  listaTareas: Tarea[]

  constructor() {
  	//this.tareaPrueba = new Tarea ('Titulo de prueba', 'Descripcion de prueba')
  	this.listaTareas = []
  }

  agregarTarea($event){
  	this.listaTareas.push($event)
  }
}
