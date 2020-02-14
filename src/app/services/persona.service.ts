import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url =  `${environment.urlGlobal}/persona`;

  constructor( private http: HttpClient ) { }

  postPersona( persona: any ) {
    return this.http.post(`${this.url}/registrar`, persona).toPromise();
  }
}
