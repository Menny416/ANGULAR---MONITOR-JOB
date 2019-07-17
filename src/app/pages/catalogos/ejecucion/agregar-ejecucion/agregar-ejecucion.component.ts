import { Component, OnInit } from '@angular/core';
import { Ejecucion } from '../../../../models/ejecucion';
import { EjecucionService } from 'src/app/services/ejecucion.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-ejecucion',
  templateUrl: './agregar-ejecucion.component.html'
})
export class AgregarEjecucionComponent implements OnInit {

  ejecucion: Ejecucion = new Ejecucion();

  constructor(private EjecucionS: EjecucionService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.ejecucion.tipoEjecucion = forma.value.tipoEjecucion;
    this.ejecucion.esActivo = forma.value.esActivo;

    this.EjecucionS.agregar(this.ejecucion).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/ejecucion/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }
  ngOnInit() {
  }

}
