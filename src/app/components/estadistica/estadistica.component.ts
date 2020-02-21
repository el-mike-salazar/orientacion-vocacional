import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EstadisticaService } from '../../services/estadistica.service';
import { PerfilModel } from 'src/app/models/perfil.model';
import { PrepaModel } from '../../models/prepa.model';
import Swal from 'sweetalert2';
import { PerfilGralModel } from '../../models/perfil.model';
import { environment } from '../../../environments/environment.prod';

@Component({
    selector: 'app-estadistica',
    templateUrl: './estadistica.component.html',
    styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

    perfil: PerfilModel[];
    perfilGral: PerfilGralModel[];
    prepa: PrepaModel[];
    dataPrepa: any[];
    dataGral: any[];
    dataGralName: any[];
    idOtros = environment.general;

    HighchartsGral = Highcharts;
    chartConstructorGral = 'chart';
    chartOptionsGral = {
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Personas'
            }
        },
        series: [{
            name: '',
            type: 'column',
            colorByPoint: true,
            data: [],
            showInLegend: false
        }]
    };

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
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: '% de Coincidencia',
            colorByPoint: true,
            data: []
        }]

    };

    constructor( private estadisticaService: EstadisticaService) { }

    async ngOnInit() {
        await this.getEstadisticaPrepa(this.idOtros);
        await this.getEstadistica();
        await this.getPrepa();
    }

    getPrepa() {
        this.estadisticaService.getPrepa().then( (data: any) => {
            this.prepa = data.cont.planteles;
            // console.log(this.prepa);
        }).catch( err => {
            console.log(err);
            Swal.fire({
                title: 'Upssss! Sucedió un problema',
                text: err.error.msg,
                icon: 'error',
                confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
                confirmButtonColor: '#17a2b8'
            });
        });
    }

    getEstadistica() {
        this.dataGralName = [];
        this.dataGral = [];
        this.estadisticaService.getEstadistica().then((resp: any) => {
            this.perfilGral = resp.cont.arrPerfil;
            console.log(this.perfilGral);
            // tslint:disable-next-line: no-shadowed-variable
            this.perfilGral.forEach( resp => {
                this.dataGralName.push(resp.strNombre);
                this.dataGral.push(resp.nmbPersonas);
            });
            // console.log(this.dataGralName);
            // console.log(this.dataGral);
            this.chartOptionsGral = {
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: this.dataGralName
                },
                yAxis: {
                    title: {
                        text: 'Personas'
                    }
                },
                series: [{
                    name: 'Personas',
                    type: 'column',
                    colorByPoint: true,
                    data: this.dataGral,
                    showInLegend: false
                }]
            };
        }).catch( err => {
            console.log(err);
        });
    }

    async getEstadisticaPrepa(idPrepa: string) {
        this.dataPrepa = [];
        console.log('object', this.dataPrepa );
        await this.estadisticaService.getEstadisticaPrepa(idPrepa).then((resp: any) => {
            this.perfil = resp.cont.arrPerfil;
            console.log(this.perfil);
            console.log(resp);
            console.log(this.dataPrepa);
            // tslint:disable-next-line: no-shadowed-variable
            this.perfil.forEach( resp => {
                this.dataPrepa.push({name: resp.strNombre, y: resp.nmbPersonas});
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
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: '% de Coincidencia',
                    colorByPoint: true,
                    data: this.dataPrepa
                }]
            };
        }).catch( err => {
            this.dataPrepa = [];
            // console.log(this.dataPrepa);
            // console.log(err);
            Swal.fire({
                title: 'Upssss! Sucedió un problema',
                text: err.error.msg,
                icon: 'warning',
                confirmButtonText: '<i class="fa fa-check mr-2"></i> Entendido',
                confirmButtonColor: '#17a2b8'
            });
        });
    }
}
