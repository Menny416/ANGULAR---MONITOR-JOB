import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-catalogos',
  templateUrl: './inicio-catalogos.component.html',
  styleUrls: ['./inicio-catalogos.component.css']
})
export class InicioCatalogosComponent implements OnInit {
  menu: any = [
    {
      nombre: 'USUARIOS',
      link: 'usuarios'
    },
    {
      nombre: 'SERVIDORES',
      link: 'servidores'
    },
    {
      nombre: 'AREAS',
      link: 'areas'
    },
    {
      nombre: 'VISTAS',
      link: 'vistas'
    },
    {
      nombre: 'TEMAS',
      link: 'temas'
    },
    {
      nombre: 'TIPO DE CRITICIDAD',
      link: 'criticidad'
    },
    {
      nombre: 'TIPO DE PAQUETES',
      link: 'paquetes'
    },
    {
      nombre: 'TIPO DE EJECUCION',
      link: 'ejecucion'
    },
    {
      nombre: 'TIPO DE MONITOREO',
      link: 'monitoreo'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
