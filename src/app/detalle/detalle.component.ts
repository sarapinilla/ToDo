import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model'

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

	@Input() tarea: Tarea

  constructor() { }

  ngOnInit() {
  }

  cambiarCompleta() {
  	this.tarea.completa = !this.tarea.completa
  }

}
