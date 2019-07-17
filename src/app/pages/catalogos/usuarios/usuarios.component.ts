import { Component, OnInit } from '@angular/core';
import { GridsService } from '../../../services/grids.service';
import { ToolsService } from '../../../services/tools.service';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  gridData: any[] = [];
  titulo: string = '';
  constructor(private router: Router,
              private grid: GridsService,
              private tools: ToolsService) {
    this.getDataRoute().subscribe((data: any) => {
      this.titulo = data.titulo;
    });
   }

  ngOnInit() {
    this.cargarGrilla();
  }

  cargarGrilla() {

    this.grid.consultarGridUsuarios().subscribe((res: any) => {
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
