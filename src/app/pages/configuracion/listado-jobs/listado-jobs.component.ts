import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-jobs',
  templateUrl: './listado-jobs.component.html',
  styleUrls: ['./listado-jobs.component.css']
})
export class ListadoJobsComponent implements OnInit {
  jobs: any[];
  servidor: any;
  constructor(private jobServices: JobsService, private router: Router, private tools: ToolsService) { }

  ngOnInit() {
    this.servidor = JSON.parse( localStorage.getItem('servidor'));
    this.jobServices.consultarJobServidor(this.servidor.servidorId).subscribe((res: any) => {
      this.jobs = res.data;
    }, e => { this.error(e); } , () => {
      this.tools.convertirDataTable('#tblJob');
    });
  }

  public error(mensaje: string) {
    Swal.fire('¡Error!', mensaje, 'error');
  }

  configurar(job: any) {
    localStorage.setItem(job.id, JSON.stringify(job));
    this.router.navigate(['/configuracion/job/', job.id]);
  }

}
