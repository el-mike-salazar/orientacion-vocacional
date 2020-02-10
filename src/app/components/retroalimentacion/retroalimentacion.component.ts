import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-retroalimentacion',
  templateUrl: './retroalimentacion.component.html',
  styleUrls: ['./retroalimentacion.component.css']
})
export class RetroalimentacionComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions = { 
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Resultados de Orientacion Vocacional'
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
  }]};

  constructor() { }

  ngOnInit() {
  }

}
