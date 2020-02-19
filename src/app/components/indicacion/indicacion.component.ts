import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-indicacion',
  templateUrl: './indicacion.component.html',
  styleUrls: ['./indicacion.component.css']
})
export class IndicacionComponent implements OnInit {

  idPersona: string;

  constructor( private activatedRoute: ActivatedRoute, private route: Router) {
    this.idPersona = this.activatedRoute.snapshot.params.idPersona;
   }

  ngOnInit() {
  }

  siguiente() {
    this.route.navigate([`/test/${this.idPersona}`]);
  }

}
