import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';
import { Router } from '@angular/router';
import { ScannerService } from '../../services/scanner.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  servidores: any[];
  constructor(private monitorService: MonitorService, private router: Router, private scannerS: ScannerService) { }

  ngOnInit() {
    this.monitorService.consultarServidores().subscribe((res: any) => {
      this.servidores = res.data;
      // console.log(this.servidores);
    });
  }

  configurar(servidor: any) {
    // console.log(servidor);
    localStorage.setItem('servidor', JSON.stringify(servidor));
    this.router.navigate(['/configuracion/listado/jobs/', servidor.servidorId]);
  }
  procesar() {
    this.scannerS.procesar().subscribe((res: any) => {});
  }
}
