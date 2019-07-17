import { Component, OnInit } from '@angular/core';
import { GridsService } from '../../../services/grids.service';
import { ToolsService } from '../../../services/tools.service';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  gridData: any[] = [];
  titulo = '';
  constructor(private router: Router,
              private grid: GridsService,
              private tools: ToolsService) {
    this.getDataRoute().subscribe((data: any) => {
      this.titulo = data.titulo;
    });
   }

  ngOnInit() {
    this.cargarGrilla(true);
  }

  onChange(object: any) {
    this.cargarGrilla(object);
  }

  cargarGrilla(val: boolean) {
    let valor = 1;
    if (val === true) {
      valor = 1;
    } else {
      valor = 0;
    }
    this.grid.consultarGridTemas(valor).subscribe((res: any) => {
      this.gridData = res.data;
    }, null, () => {
        this.tools.convertirDataTable('#tblListadoAreas');
    });
  }

  getDataRoute() {
    return this.router.events
    .pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
