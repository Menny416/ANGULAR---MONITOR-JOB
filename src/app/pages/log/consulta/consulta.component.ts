import { Component, OnInit } from '@angular/core';
import { ScannerService } from '../../../services/scanner.service';
import Swal from 'sweetalert2';
import { ToolsService } from 'src/app/services/tools.service';
import { timer } from 'rxjs';
import { filter, retryWhen, take } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';



declare var $: any;


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  logEstatusErrores: any;
  logEstatusEjecutados: any;
  Ecorrecto = 0;
  Eerror = 0;
  logGroupErrores: any;
  logGroupEjecutados: any;
  servidorId = 0;
  constructor(private logS: ScannerService, private tools: ToolsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.servidorId = parseInt(param.id, 0);
    });
  }

  consultarLog() {
    this.consultar();
    /*timer(0, 15000).pipe().subscribe(x => {
      this.consultar();
    });*/
  }

  consultar() {
    const txtfechaInicio = $('#txtFechaInicio').val();
    const txtfechaFin = $('#txtFechaFin').val();

    if (txtfechaInicio === '') {
      Swal.fire('Fecha Inicio', 'Favor de definir la fecha de inicio', 'error');
      return;
    }
    if (txtfechaFin === '') {
      Swal.fire('Fecha Fin', 'Favor de definir la fecha de fin', 'error');
      return;
    }

    const fechaInicio = new Date(txtfechaInicio);
    const fechaFin = new Date(txtfechaFin);
    const consultaFechaInicio = formatDate(fechaInicio, 'yyyy-dd-MM', 'en-US');
    const consultaFechaFin = formatDate(fechaFin, 'yyyy-dd-MM', 'en-US');

    if (fechaInicio > fechaFin) {
      Swal.fire('Fecha inicio mayor que fecha fin', 'La fecha inicio no puede ser mayor que la fecha fin', 'error');
      return;
    }
    if (fechaFin < fechaInicio) {
      Swal.fire('Fecha fin menor que inicio', 'La fecha fin no puede ser menor que la fecha inicio', 'error');
      return;
    }

    this.logS.getLogStatus(this.servidorId, consultaFechaInicio, consultaFechaFin).subscribe((res: any) => {
      console.log(res.data);
    }, e => { this.error(e); }, () => {});

    this.logS.getLog(this.servidorId, consultaFechaInicio, consultaFechaFin).subscribe((res: any) => {
      console.log(res.data);
      this.logEstatusErrores = res.data.filter((x: any) => x.run_status === 0);
      this.logEstatusEjecutados = res.data.filter((x: any) => x.run_status === 1);
      this.Eerror = this.logEstatusErrores.length;
      this.Ecorrecto = this.logEstatusEjecutados.length;
      this.logGroupErrores = this.groupBy(this.logEstatusErrores, 'job_id');
      this.logGroupEjecutados = this.groupBy(this.logEstatusEjecutados, 'job_id');
      console.log(this.logGroupErrores);
      console.log(this.logGroupEjecutados);

    }, e => { this.error(e); }, () => {
      this.tools.convertirDataTable('#tblError');
      this.tools.convertirDataTable('#tblCorrecto');
    });
  }
  public error(mensaje: string) {
    Swal.fire('¡Error!', mensaje, 'error');
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
