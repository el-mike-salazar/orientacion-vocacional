import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  pregunta = [
    '1.	Salir de Excursión',
    '2.	Armar y desarmar objetos mecánicos',
    '3.	Resolver mecanizaciones numéricas',
    '4.	Conocer y estudiar la estructura de las plantas y animales',
    '5.	Discutir en clase',
    '6.	Dibujar y pintar a colores',
    '7.	Escribir cuentos, crónicas o artículos',
    '8.	Cantar en un coro estudiantil',
    '9.	Atender y cuidar a los enfermos',
    '10.	Llevar en orden tus libros y cuadernos',
    '11.	Pertenecer a un club de exploradores',
    '12.	Manejar herramientas y maquinaria',
    '13.	Resolver problemas de aritmética',
    '14.	Hacer experimentos de biología, física o química',
    '15.	Ser jefe de un club o sociedad',
    '16.	Moldear en barro',
    '17.	Leer obras literarias',
    '18.	Escuchar música clásica',
    '19.	Proteger a los muchachos menores del grupo',
    '20.	Ordenar y clasificar los libros de la biblioteca',
    '21.	Vivir al aire libre fuera de la ciudad',
    '22.	Construir objetos o muebles de madera',
    '23.	Levantar las cuentas de una cooperativa escolar',
    '24.	Investigar el origen de las costumbres de los pueblos',
    '25.	Dirigir la campaña política de un candidato estudiantil',
    '26.	Encargarte del decorado de una exposición escolar',
    '27.	Hacer versos para un periódico estudiantil',
    '28.	Aprender a tocar un instrumento musical',
    '29.	Ser miembro de una sociedad de ayuda asistencial',
    '30.	Aprender a escribir a máquina y taquigrafía',
    '31.	Sembrar y plantar en una granja durante las vacaciones',
    '32.	Reparar las instalaciones eléctricas de casa',
    '33.	Explicar a otros cómo resolver problemas de aritmética',
    '34.	Estudiar y entender las causas de los movimientos sociales',
    '35.	Hacer propaganda para la venta de un periódico estudiantil',
    '36.	Idear y diseñar el escudo de un club o sociedad',
    '37.	Representar un papel en una obra teatral',
    '38.	Ser miembro de una asociación musical',
    '39.	Enseñar a leer a los analfabetos',
    '40.	Ayudar a clasificar pruebas',
    '41.	Criar animales en un rancho durante las vacaciones',
    '42.	Poyectár o dirigir la construcción de un pozo o noria',
    '43.	Participar en un concurso de arimética',
    '44.	Leer revistas y libros científicos',
    '45.	Leer biografías de políticos prominentes',
    '46.	Diseñar el vestuario para una función teatral',
    '47.	Participar en un concurso de oratoria',
    '48.	Leer biografías de músicos eminentes',
    '49.	Ayudar a sus compañeros en sus difilcultades y preocupaciones',
    '50.	Encargarte del archivo y los documentos de una sociedad',
    '51.	Técnico agrícola en una región algodonera',
    '52.	Perito mecánico en una gran empresa o taller',
    '53.	Experto calculista en una industria',
    '54.	Investigador en un laboratorio de biología, física o química',
    '55.	Agente de ventas en una empresa comercial',
    '56.	Perito dibujante en una empresa industrial',
    '57.	Redactor en un periódico',
    '58.	Músico de una sinfónica',
    '59.	Misionero al servicio de las clases humildes',
    '60.	Técnico organizador de oficinas'
  ];

  uno = [];
  dos = [];
  tres = [];
  cuatro = [];
  cinco = [];

  detalle: boolean;

  constructor() { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
    // Swal.fire({
    //   title: 'Antes de Comenzar!',
    //   text: 'En base a la pregunta, selecciona uno de los Emojis',
    //   icon: 'info',
    //   confirmButtonText: 'De Acuerdo',
    // });
  }

  mostrarDetalle() {
    if (this.detalle === true) {
      this.detalle = false;
      console.log(this.detalle);
    } else {
      this.detalle = true;
      console.log(this.detalle);
    }
  }

  sumarRespuesta(idRespuesta) {
    console.log(idRespuesta);
  }
}
