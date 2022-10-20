import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
//necesitamos el arreglo y como trabajamos con  input lo referenciamos
  //arreglo copia de donde guardamos los registros, para que haga match con los campos del formulario
 
  //@Input() alumnosUtl:AlumnosUtl[]=[];

 @Input() regAlum:AlumnosUtl={
  nombre:'',
  edad:0,
}

@Output() onNuevoAlumnos:EventEmitter<AlumnosUtl>=new EventEmitter();

constructor(private UtlService:UtlService){
  }
agregar(){

 //this.alumnosUtl.push(this.regAlum);
  this.UtlService.mostrarSaludo();
 this.onNuevoAlumnos.emit(this.regAlum);
  this.regAlum={
    nombre:'',
    edad:0
  }
}
  

}
