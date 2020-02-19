import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  url =  `${environment.urlGlobal}`;

  constructor( private http: HttpClient ) { }

  getPerfil() {
    return this.http.get(`${this.url}/perfil/obtener`).toPromise();
  }

  getPrepa() {
    return this.http.get(`${this.url}/plantel/obtener`).toPromise();
  }
}
