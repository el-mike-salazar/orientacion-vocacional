import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-retroalimentacion',
  templateUrl: './retroalimentacion.component.html',
  styleUrls: ['./retroalimentacion.component.css']
})
export class RetroalimentacionComponent implements OnInit {

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = { series:[{ data:[1, 2,5,1,3] }] }; // required
  chartCallback = function (chart) { null } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

}
