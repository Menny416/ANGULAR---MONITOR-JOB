import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servidor } from 'src/app/models/servidor';
import { ServidoresService } from 'src/app/services/servidores.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-servidor',
  templateUrl: './agregar-servidor.component.html'
})
export class AgregarServidorComponent implements OnInit {
  servidor: Servidor = new Servidor();

  constructor(private ServidorS: ServidoresService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.servidor.servidor = forma.value.servidor;
    this.servidor.conexion = forma.value.conexion;
    this.servidor.esActivo = forma.value.esActivo;

    this.ServidorS.agregar(this.servidor).subscribe(
      (res: any) => {
        if (res.succes === false) {
          Swal.fire('Ha ocurrido un error', res.message, 'error');
        }
        Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
          this.router.navigate(['/administracion/servidores/']);
        });
      }, err => {
        Swal.fire('Ha ocurrido un error', err, 'error');
      });
  }

  ngOnInit() {
  }

}
