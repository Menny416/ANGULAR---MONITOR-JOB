import { Component, OnInit } from '@angular/core';
import { AreaModel } from 'src/app/models/area.model';
import { AreasService } from 'src/app/services/areas.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-area',
  templateUrl: './modificar-area.component.html',
  styleUrls: ['./modificar-area.component.css']
})
export class ModificarAreaComponent implements OnInit {
  area: AreaModel = new AreaModel();

  constructor(private areaS: AreasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.area.areaId = parseInt(param.id, 0);
      this.areaS.getBtyId(this.area.areaId).subscribe((res: any) => {
        this.area = res.data;
        console.log(res.data);
       });
    });
  }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.area.area = forma.value.area;
    this.area.esActivo = forma.value.esActivo;
    this.areaS.editar(this.area).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/areas/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  esActivoMod(val: any) {
    this.area.esActivo = val;
  }

}
