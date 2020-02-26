import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { RespuestaModel } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  url =  `${environment.urlGlobal}`;

  constructor( private http: HttpClient ) { }

  getPregunta( idPersona: string ) {
    return this.http.get(`${this.url}/pregunta/obtenerAleatorio/${idPersona}`).toPromise();
  }

  getSatisfaccion( idPersona: string, idSatisfaccion: string ) {
    return this.http.get(`${this.url}/respuesta/obtenerPorSatisfaccion/${idPersona}/${idSatisfaccion}`).toPromise();
  }

  getResultado(idPersona: string) {
    return this.http.get(`${this.url}/respuesta/obtenerResultado/${idPersona}`).toPromise();
  }

  getCountResp( idPersona: string ) {
    return this.http.get(`${this.url}/respuesta/contadorRespuestas/${idPersona}`).toPromise();
  }

  postResupesta( respuesta: RespuestaModel, idPersona: string ) {
    return this.http.post(`${this.url}/respuesta/registrar/${idPersona}`, respuesta).toPromise();
  }

  deleteRespuesta( idPersona: string, idRespuesta: string ) {
    return this.http.delete(`${this.url}/respuesta/eliminar/${idPersona}/${idRespuesta}`).toPromise();
  }

  deleteTest(idPersona: string) {
    return this.http.delete(`${this.url}/respuesta/resetearTest/${idPersona}`).toPromise();

  }

}
