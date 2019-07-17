import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensual',
  templateUrl: './mensual.component.html',
  styleUrls: ['./mensual.component.css']
})
export class MensualComponent implements OnInit {

  nombreGrafica = 'grfData1';
  nombreGrafica2 = 'grfData2';
  nombreGrafica3 = 'grfData3';
  datos1: any = [{
    country: 'Calidad',
    litres: 100
  }, {
    country: 'Supply',
    litres: 150
  }, {
    country: 'Comercial',
    litres: 200
  }, {
    country: 'FYL',
    litres: 250
  }, {
    country: 'Gestion Norte',
    litres: 300
  }, {
    country: 'Gestion Sur',
    litres: 80
  }, {
    country: 'DWH CIPA',
    litres: 400
  }, {
    country: 'DWH',
    litres: 450
  }, {
    country: 'Costos',
    litres: 40
  }];

  datos2: any = [{
    country: 'Marlene Ortiz',
    litres: 501
  }, {
    country: 'Daniel Rodriguez',
    litres: 301
  }, {
    country: 'Alfonso Garcia',
    litres: 266
  }, {
    country: 'Guadalupe Cavazos',
    litres: 165
  }, {
    country: 'Cristina Armendariz',
    litres: 139
  }, {
    country: 'Liliana Barrera',
    litres: 336
  }, {
    country: 'Roberto Jasso',
    litres: 290
  }, {
    country: 'Alicia Cartagena',
    litres: 325
  }, {
    country: 'Claudian Lopez',
    litres: 40
  }];
  constructor() { }

  ngOnInit() {
  }

}
