import { Component, OnInit } from '@angular/core';
import { AreaModel } from '../../../../models/area.model';
import { AreasService } from '../../../../services/areas.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-area',
  templateUrl: './agregar-area.component.html',
  styleUrls: ['./agregar-area.component.css']
})
export class AgregarAreaComponent implements OnInit {
  area: AreaModel = new AreaModel();

  constructor(private areaS: AreasService, private router: Router) { }

  ngOnInit() {
  }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.area.area = forma.value.area;
    this.area.esActivo = forma.value.esActivo;
    this.areaS.agregar(this.area).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregado correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/areas/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

}
