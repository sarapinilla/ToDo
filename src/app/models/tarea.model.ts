export class Tarea{

	titulo: string
	descripcion: string
	completa: boolean

	constructor(pTitulo: string, pDescription: string){
		this.titulo = pTitulo
		this.descripcion = pDescription
		this.completa = false
	}
}