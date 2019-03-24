import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tarea } from '../models/tarea.model' //se importa la tarea desde el modelo creado en una carpeta hermana a formulario. para llamarla vuelve al padre (..) y accede al otro hijo (/models/tarea.model)

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	@Output() tareaCreada = new EventEmitter()

	tareaAux: any //para recoger los datos del formulario

	constructor() { 
		this.tareaAux = {}
	}

	ngOnInit() {

	}

	enviarTarea() {
		let t = new Tarea(this.tareaAux.titulo, this.tareaAux.descripcion) //asociando las tareas nuevas a objetos modelo, se ordenan los elementos de la app, predeterminando sus propiedades principales. forma sencilla de acceder a los datos, encapsulados fuera de los elementos en sí.
		this.tareaCreada.emit(t);
	}


}
