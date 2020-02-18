import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url =  `${environment.urlGlobal}`;

  constructor( private http: HttpClient ) { }

  postPersona( persona: any ) {
    return this.http.post(`${this.url}/persona/registrar`, persona).toPromise();
  }

  getIngresar( correo: string ) {
    return this.http.get(`${this.url}/persona/obtenerCorreo/${correo}`).toPromise();
  }

  getPrepa( idPrepa: string) {
    return this.http.get(`${this.url}/plantel/obtener/${idPrepa}`).toPromise();
  }
}
