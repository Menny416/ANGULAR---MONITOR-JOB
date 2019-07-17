import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Vista } from 'src/app/models/Vista';
import { VistaService } from 'src/app/services/vista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-vista',
  templateUrl: './agregar-vista.component.html'
})
export class AgregarVistaComponent implements OnInit {

  vista: Vista = new Vista();

  constructor(private VistaS: VistaService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.vista.vista = forma.value.vista;
    this.vista.url = forma.value.url;
    this.vista.esActivo = forma.value.esActivo;

    this.VistaS.agregar(this.vista).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/vistas/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  ngOnInit() {
  }

}
