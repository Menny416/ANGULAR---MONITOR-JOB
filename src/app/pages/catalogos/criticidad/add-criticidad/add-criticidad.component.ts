import { Component, OnInit } from '@angular/core';
import { Criticidad } from 'src/app/models/criticidad';
import { CriticidadService } from '../../../../services/criticidad.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-criticidad',
  templateUrl: './add-criticidad.component.html',
  styleUrls: []
})
export class AddCriticidadComponent implements OnInit {

  criticidad: Criticidad = new Criticidad();

  constructor(private criticidadS: CriticidadService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.criticidad.tipoCriticidad = forma.value.criticidad;
    this.criticidad.esActivo = forma.value.esActivo;
    this.criticidadS.agregar(this.criticidad).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/criticidad/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }
  ngOnInit() {
  }

}
