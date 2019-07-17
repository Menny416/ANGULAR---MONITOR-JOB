import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../../../models/paquete';
import { PaqueteService } from '../../../../services/paquete.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-paquete',
  templateUrl: './agregar-paquete.component.html',
})
export class AgregarPaqueteComponent implements OnInit {
 paquete: Paquete = new Paquete();
  constructor(private paqueteService: PaqueteService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.paquete.tipoPaquete = forma.value.tipoPaquete;
    this.paquete.esActivo = forma.value.esActivo;
    this.paqueteService.agregar(this.paquete).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/paquetes/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  ngOnInit() {
  }

}
