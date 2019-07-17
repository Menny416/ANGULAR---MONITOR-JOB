import { Component, OnInit } from '@angular/core';
import { Criticidad } from 'src/app/models/criticidad';
import { CriticidadService } from 'src/app/services/criticidad.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-criticidad',
  templateUrl: './modificar-criticidad.component.html'
})
export class ModificarCriticidadComponent implements OnInit {

  criticidad: Criticidad = new Criticidad();

  constructor(private criticidadS: CriticidadService, private route: ActivatedRoute, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.criticidad.tipoCriticidad = forma.value.tipoCriticidad;
    this.criticidad.esActivo = forma.value.esActivo;
    // console.log('forma', forma.value);
    // console.log('criticidad' , this.criticidad);
    this.criticidadS.agregar(this.criticidad).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/criticidad/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.criticidad.tipoCriticidadId = parseInt(param.id, 0);
      this.criticidadS.getBtyId(this.criticidad.tipoCriticidadId).subscribe((res: any) => {
        this.criticidad = res.data;
       });
    });
  }

  esActivoMod(val: any) {
    
    this.criticidad.esActivo = val;
  }
}
