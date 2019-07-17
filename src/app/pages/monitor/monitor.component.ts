import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';
import { Job } from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs.service';
import { ignoreElements, groupBy, mergeMap, toArray } from 'rxjs/operators';
import { Observable, timer, from, of, zip } from 'rxjs';
import Swal from 'sweetalert2';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  cuerpo = '';
  NoCriticos = 0;
  NoAlertas = 0;
  DataCriticos: any[];
  DataAlertas: any[];
  model: Job = new Job();
  constructor(private monitorService: MonitorService,
              private jobService: JobsService,
              private tools: ToolsService) { }

  ngOnInit() {

      this.monitorService.consultarJob(0, 0).subscribe((res: any) => {
        this.DataCriticos = res.data; // this.tools.groupBy(res.data, 'job');
        this.NoCriticos = res.data.length;
      }, e => { this.error(e); }, () => {  this.tools.convertirDataTable('#tblAlertas'); });
      this.monitorService.consultarJob(1, 0).subscribe((res: any) => {
        this.DataAlertas = this.tools.groupBy(res.data, 'job');
        this.NoAlertas = res.data.length;
      }, e => { this.error(e); }, () => {  this.tools.convertirDataTable('#tblAdvertencias'); });
      // timer(0, 15000).pipe().subscribe(x => {});

  }


  open(content, data: any) {
    this.model = data;
  }

  correo(mensaje: any) {
   this.jobService.mandarCorreo({ Id: mensaje.notificadorId, Contenido: this.cuerpo }).subscribe(r => {
      if (r.success) {
        Swal.fire('Enviado', 'Se ha enviado el correo.', 'success');
      } else {
        this.error('No se envio el correo');
      }
    }, e => { this.error(e); });
  }

  public error(mensaje: string) {
    Swal.fire('¡Error!', mensaje, 'error');
  }
}
