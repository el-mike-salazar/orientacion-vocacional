import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EstadisticaService } from '../../services/estadistica.service';
import { PerfilModel } from 'src/app/models/perfil.model';
import { PrepaModel } from '../../models/prepa.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

    perfil: PerfilModel;
    prepa: PrepaModel;

    Highcharts = Highcharts;
    chartConstructor = 'chart';
    chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
      },
      title: {
          text: 'Browser<br>shares<br>2017',
          align: 'center',
          verticalAlign: 'middle',
          y: 60
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                      fontWeight: 'bold',
                      color: 'white'
                  }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%'],
              size: '110%'
          }
      },
      series: [{
          type: 'pie',
          name: 'Browser share',
          innerSize: '50%',
          data: [
              ['Chrome', 58.9],
              ['Firefox', 13.29],
              ['Internet Explorer', 13],
              ['Edge', 3.78],
              ['Safari', 3.42],
              {
                  name: 'Other',
                  y: 7.61,
                  dataLabels: {
                      enabled: false
                  }
              }
          ]
      }]
    };
    Highcharts2 = Highcharts;
    chartConstructor2 = 'chart';
    chartOptions2 = {
        chart: {
          type: 'pie'
        },
        title: {
          text: ''
        },
        series: [{
          name: '% de Usuarios',
          colorByPoint: true,
          data: [{
              name: 'Chrome',
              y: 61.41
          }, {
              name: 'Internet Explorer',
              y: 11.84
          }, {
              name: 'Firefox',
              y: 10.85
          }, {
              name: 'Edge',
              y: 4.67
          }, {
              name: 'Safari',
              y: 4.18
          }, {
              name: 'Sogou Explorer',
              y: 1.64
          }, {
              name: 'Opera',
              y: 1.6
          }, {
              name: 'QQ',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
      }]
    };

    constructor( private estadisticaService: EstadisticaService) { }

    ngOnInit() {
        this.estadisticaService.getPerfil().then( (data: any) => {
            this.perfil = data.cont.perfiles;
            console.log(this.perfil);
        }).catch( err => {
            console.log(err);
        });
        this.estadisticaService.getPrepa().then( (data: any) => {
            this.prepa = data.cont.planteles;
            console.log(this.prepa);
        }).catch( err => {
            console.log(err);
        });
    }
}
