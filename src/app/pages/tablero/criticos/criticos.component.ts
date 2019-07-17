import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';
import { Job } from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs.service';
declare var $: any;
@Component({
  selector: 'app-criticos',
  templateUrl: './criticos.component.html',
  styleUrls: ['./criticos.component.css']
})
export class CriticosComponent implements OnInit {

  NoCriticos = 0;
  NoAlertas = 0;
  DataCriticos: any[];
  DataAlertas: any[];
  model: Job = new Job();
  constructor(private monitorService: MonitorService) { }

  ngOnInit() {
    this.monitorService.consultarJob(0, 0)
    .subscribe((res: any) => {
      this.DataCriticos = res.data;
      console.log(this.DataCriticos);
      this.NoCriticos = res.data.length;
    });
    this.monitorService.consultarJob(1, 0)
    .subscribe((res: any) => {
      this.DataAlertas = res.data;
      this.NoAlertas = res.data.length;
    });
  }


  open(content, data: any) {
    this.model = data;
    console.log(this.model);
  }




}
