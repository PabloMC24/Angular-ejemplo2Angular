import { Component, Input, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  get alumnos(){
    return this.alumnosUtl.alumnosUtl;
   }
    constructor(private alumnosUtl:UtlService) { }
  
  ngOnInit(): void {
  }

}
