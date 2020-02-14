import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { RespuestaModel } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  url =  `${environment.urlGlobal}/`;

  constructor( private http: HttpClient ) { }

  getPregunta( idPersona: string ) {
    return this.http.get(`${this.url}pregunta/obtenerAleatorio/${idPersona}`,{}).toPromise();
  }

  postResupesta(respuesta: RespuestaModel, idPersona: string) {
    return this.http.post(`${this.url}respuesta/registrar/${idPersona}`, respuesta).toPromise();
  }

}
