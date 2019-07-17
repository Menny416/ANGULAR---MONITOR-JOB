import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Paquete } from 'src/app/models/paquete';
import { NgForm } from '@angular/forms';
import { PaqueteService } from '../../../../services/paquete.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-paquete',
  templateUrl: './editar-paquete.component.html',
})
export class EditarPaqueteComponent implements OnInit {
  paquete: Paquete = new Paquete();
  constructor(private paqueteService: PaqueteService, private route: ActivatedRoute, private router: Router) { }

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
      Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/paquetes/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.paquete.tipoPaqueteId = parseInt(param.id, 0);
      this.paqueteService.getBtyId(this.paquete.tipoPaqueteId).subscribe((res: any) => {
        this.paquete = res.data;
       });
    });
  }

  esActivoMod(val: any) {

    this.paquete.esActivo = val;
  }

}
