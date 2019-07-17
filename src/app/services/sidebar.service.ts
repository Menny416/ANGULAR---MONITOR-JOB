import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-view-dashboard',
      url: '/inicio',
      subMenu: [
        {titulo: 'Inicio', url: '/inicio'},
        {titulo: 'Ordenes', url: '/tablero/ordenes'}
      ]
    },
    {
      titulo: 'Ordenes',
      icono: 'mdi mdi-email-outline',
      url: '/ordenes',
      subMenu: [
        {titulo: 'Ordenes Creadas', url: '/ordenes'},
        {titulo: 'Ordenes Aprobadas', url: '/aprobadas'},
        {titulo: 'Ordenes Denegadas', url: '/denegadas'},
        {titulo: 'Ordenes Error', url: '/error'}
      ]
    },
    {
      titulo: 'Precios',
      icono: 'mdi mdi-currency-usd',
      url: '/listaprecios',
      subMenu: [
        {titulo: 'Lista de Precios', url: '/listaprecios'},
      ]
    },
    {
      titulo: 'Catalogos',
      icono: 'mdi mdi-database-plus',
      subMenu: [
        {titulo: 'Productos', url: '/producto'},
        {titulo: 'No Productos', url: '/noproducto'}
      ]
    }
  ];
  constructor() { }
}
