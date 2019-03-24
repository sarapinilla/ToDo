import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model'

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	@Input() arrTareas: Tarea[] //se especifica el tipo de objeto a partir de nuestra clase

	constructor() { 

	}

	ngOnInit() {

	}

	



}
