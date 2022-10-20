import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

interface AlumnosUtl{
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  alumnosUtl:AlumnosUtl[]=[]


  resAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }

  constructor(){

  }
 
  agregarNuevoAlumno(datos:AlumnosUtl){
    this.alumnosUtl.push(datos);
    
  }
}
