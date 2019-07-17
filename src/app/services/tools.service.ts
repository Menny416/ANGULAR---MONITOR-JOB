import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  convertirDataTable(selector: string) {
    $(selector).dataTable().fnDestroy();
    setTimeout(() => {
      $(selector).dataTable( {
        lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, 'All'] ],
        language: {
            sProcessing:     'Procesando...',
            sLengthMenu:     'Mostrar _MENU_ registros',
            sZeroRecords:    'No se encontraron resultados',
            sEmptyTable:     'Ningún dato disponible en esta tabla',
            sInfo:           '_START_ a _END_ de _TOTAL_ registro(s)',
            sInfoEmpty:      '0 a 0 de 0 registros',
            sInfoFiltered:   '(filtrado de un total de _MAX_ registros)',
            sInfoPostFix:    '',
            sSearch:         'Buscar:',
            sUrl:            '',
            sInfoThousands:  ',',
            sLoadingRecords: 'Cargando...',
            oPaginate: {
                sFirst:    'Primero',
                sLast:     'Último',
                sNext:     'Siguiente',
                sPrevious: 'Anterior'
            },
            oAria: {
                sSortAscending:  ': Activar para ordenar la columna de manera ascendente',
                sSortDescending: ': Activar para ordenar la columna de manera descendente'
            }
        }
      });
    }, 1000);
  }
  convertirArr(result: any, valor: string) {
    const arr: any = [];
    // tslint:disable-next-line: forin
    for (const k in result) {
      if ([k].toString().includes(valor)) {
        arr.push(result[k]);
      }
    }
    return arr;
  }
  groupBy(collection, property) {
    let i = 0;
    let val;
    let index;
    const values = [];
    const result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) {
            result[index].push(collection[i]);
        } else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
  }
}
