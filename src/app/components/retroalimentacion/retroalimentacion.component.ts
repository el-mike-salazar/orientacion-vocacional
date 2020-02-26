import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ResultadoModel } from 'src/app/models/resultado.model';

@Component({
  selector: 'app-retroalimentacion',
  templateUrl: './retroalimentacion.component.html',
  styleUrls: ['./retroalimentacion.component.css']
})
export class RetroalimentacionComponent implements OnInit {

  idPersona: string;
  resultado: ResultadoModel[];
  data: any[];

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
      name: '% de Coincidencia',
      colorByPoint: true,
      data: []
    }]
  };


  constructor( private preguntaService: PreguntaService, private activatedRoute: ActivatedRoute) {
    this.idPersona = this.activatedRoute.snapshot.params.idPersona;
   }

  async ngOnInit() {
    this.data = [];
    await this.preguntaService.getResultado(this.idPersona).then( async (resp: any) => {
      // tslint:disable-next-line: only-arrow-functions
      resp.cont.arrPerfil.sort(function(a, b) {
        return b.nmbPuntos - a.nmbPuntos;
      });
      this.resultado = resp.cont.arrPerfil;
      // tslint:disable-next-line: no-shadowed-variable
      this.resultado.forEach(resp => {
        this.data.push({ name: resp.strPerfil, y: resp.nmbPuntos });
      });
      this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
          name: '% de Coincidencia',
          colorByPoint: true,
          data: this.data
      }]
    };
    }).catch( err => {
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
