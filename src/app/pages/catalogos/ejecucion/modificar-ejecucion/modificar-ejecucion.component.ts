import { Component, OnInit } from '@angular/core';
import { Ejecucion } from 'src/app/models/ejecucion';
import { EjecucionService } from 'src/app/services/ejecucion.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-ejecucion',
  templateUrl: './modificar-ejecucion.component.html'
})
export class ModificarEjecucionComponent implements OnInit {
  ejecucion: Ejecucion = new Ejecucion();

  constructor(private EjecucionS: EjecucionService, private route: ActivatedRoute, private router: Router) { }

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
      Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/ejecucion/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.ejecucion.tipoEjecucionId = parseInt(param.id, 0);
      this.EjecucionS.getBtyId(this.ejecucion.tipoEjecucionId).subscribe((res: any) => {
        this.ejecucion = res.data;
       });
    });
  }
  esActivoMod(val: any) {
    
    this.ejecucion.esActivo = val;
  }
}
