import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Este es un test que te puede ayudar a decidir que carrera elegir.',
      icon: 'info',
      confirmButtonText: '<i class="fas fa-sign-in-alt"></i> Entendido',
      confirmButtonColor: '#17a2b8'
    });
  }

}
