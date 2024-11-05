import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../modelos/proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(public http:HttpClient) {

    this.getProyectos;
   }

  getProyectos():Observable<proyectos[]>{

    return this.http.get <proyectos[]>("./assets/data/proyectos.json")

  }


}
