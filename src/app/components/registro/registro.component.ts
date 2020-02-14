import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PersonaModel } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona: PersonaModel = new PersonaModel();

  idPreparatoria: string;
  idPersona: string;

  constructor( private personaService: PersonaService, private activatedRoute: ActivatedRoute, private route: Router ) { 
    this.idPreparatoria = this.activatedRoute.snapshot.params.idPreparatoria;
  }

  ngOnInit() {
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Este es un test que te puede ayudar a decidir que carrera elegir.',
      icon: 'info',
      confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
      confirmButtonColor: '#17a2b8'
    });
  }

  registrar() {
    // console.log(this.persona);
    this.persona.idPreparatoria = this.idPreparatoria;
    this.personaService.postPersona(this.persona).then((resp: any) => {
      console.log(resp);
      this.idPersona = resp.cont.persona._id;
      this.route.navigate([`/indicacion/${this.idPersona}`]);
    }).catch( err => {
      console.log(err.error.msg);
      Swal.fire({
        title: 'Upssss! Sucedió un problema',
        text: err.error.msg,
        icon: 'error',
        confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
        confirmButtonColor: '#17a2b8'
      });
    });
  }

}
