import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PreguntaModel } from 'src/app/models/pregunta.model';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { RespuestaModel } from 'src/app/models/respuesta.model';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  idPersona: string;
  pregunta: PreguntaModel = new PreguntaModel();
  respuesta = environment.satisfaccion;
  detalle = false;
  respSat: any[];
  contador: any[];
  contadorGral: number;
  porGral: any;
  activo = false;
  total: number;

  constructor(private preguntaService: PreguntaService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.idPersona = this.activatedRoute.snapshot.params.idPersona;
   }

  async ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
    await this.obtenerPregunta();
  }

  async obtenerPregunta() {
    this.activo = false;
    await this.contResp();
    await this.preguntaService.getPregunta(this.idPersona).then((data: any) => {
      if (data.cont.ultima) {
        this.route.navigate([`/retroalimentacion/${this.idPersona}`]);
      } else {
        this.pregunta = data.cont.pregunta;
        this.total = data.cont.count;
        // console.log(this.pregunta);
        // console.log(this.total);
      }
      this.activo = true;
    }).catch(err => {
      // console.log(err);
      Swal.fire({
        title: 'Upssss! Sucedió un problema',
        text: err.error.msg,
        icon: 'error',
        confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
        confirmButtonColor: '#17a2b8'
      });
    });
  }

  async contResp() {
    await this.preguntaService.getCountResp(this.idPersona).then( (resp: any) => {
      this.contador = resp.cont.contadores;
      this.contadorGral = resp.cont.contGral;
      this.porGral = this.contadorGral * 100 / 60;
    }).catch( err => {
      // console.log(err);
    });
  }

  async obtenerPorSatisfaccion(idSatisfaccion: string) {
    await this.preguntaService.getSatisfaccion(this.idPersona, idSatisfaccion).then((resp: any) => {
      this.respSat = resp.cont.respuestas;
      // console.log(this.respSat);
      if (this.detalle === true) {
        this.detalle = false;
      // console.log(this.detalle);
      } else {
        this.detalle = true;
      // console.log(this.detalle);
      }
    }).catch(err => {
      this.detalle = false;
    });
  }

  async sumarRespuesta(idRespuesta) {
    const respuesta: RespuestaModel = new RespuestaModel();
    respuesta.idPregunta = this.pregunta._id;
    respuesta.idSatisfaccion = idRespuesta;
    await this.preguntaService.postResupesta(respuesta, this.idPersona).then((resp: any) => {
      this.obtenerPregunta();
      this.detalle = false;
      // console.log(resp);
    }).catch( err => {
      // console.log(err);
      Swal.fire({
        title: 'Upssss! Sucedió un problema',
        text: err.error.msg,
        icon: 'error',
        confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
        confirmButtonColor: '#17a2b8'
      });
    });
  }

  async removerPregunta(idPregunta) {

    Swal.fire({
      title: 'Estas a punto de quitar esta respuesta',
      text: '¿Estas seguro que deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#d33',
      confirmButtonText: '<i class="fas fa-check-circle"></i> Continuar',
      cancelButtonText: '<i class="fas fa-times-circle"></i> Cancelar'
    }).then(async (result) => {
      if (result.value) {
        await this.preguntaService.deleteRespuesta(this.idPersona, idPregunta).then( (resp: any) => {
          this.contResp();
        }).catch( err => {
          Swal.fire({
            title: 'Upssss! Sucedió un problema',
            text: err.error.msg,
            icon: 'error',
            confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
            confirmButtonColor: '#17a2b8'
          });
        });
      // tslint:disable-next-line: only-arrow-functions
        $(document).ready(function() {
            $('#' + idPregunta).remove();
        });
        Toast.fire({
          icon: 'info',
          title: 'La respuesta fue removida exitosamente, reaparecerá en breve'
        });
      }
    });
  }

  registro() {
    // console.log('Regresar');
    this.route.navigate(['/test']);
  }
}
