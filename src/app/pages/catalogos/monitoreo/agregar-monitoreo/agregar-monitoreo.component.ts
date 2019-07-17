import { Component, OnInit } from '@angular/core';
import { Monitoreo } from '../../../../models/monitoreo';
import { MonitoreoService } from 'src/app/services/monitoreo.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-monitoreo',
  templateUrl: './agregar-monitoreo.component.html'
})
export class AgregarMonitoreoComponent implements OnInit {

  monitoreo: Monitoreo = new Monitoreo();

  constructor(private MonitoreoS: MonitoreoService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.monitoreo.tipoMonitoreo = forma.value.tipoMonitoreo;
    this.monitoreo.esActivo = forma.value.esActivo;

    this.MonitoreoS.agregar(this.monitoreo).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/monitoreo/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }
  ngOnInit() {
  }

}
