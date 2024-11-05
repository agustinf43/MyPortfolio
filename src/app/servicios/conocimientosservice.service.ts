import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conocimientos } from '../modelos/conocimientos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConocimientosserviceService {

  constructor(public http:HttpClient) {
    this.getConocimientos;
  }
  
  getConocimientos():Observable <conocimientos[]>{

    return this.http.get <conocimientos[]>("./assets/data/conocimientos.json")


  }
  
}
