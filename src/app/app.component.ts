import { Component, OnInit  } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { SiglaService } from 'src/app/services/sigla.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TX-MONITOR-JOB';
  constructor(// private msgService: MessagingService,
              private siglaS: SiglaService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.msgService.requestPermission();
    // tslint:disable-next-line: max-line-length
    if (environment.production === true) {
      this.siglaS.consultarSigla().subscribe((res: any) => {
        localStorage.setItem('mtxuser', JSON.stringify(res[0]));
      });
    } else {
      // tslint:disable-next-line: max-line-length
      localStorage.setItem('mtxuser', '{"id":0,"name":"RAMIREZ G. Fabian Elias [PROV]|c.framgu","imagen":"data:image/jpg;base64,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","sigla":"c.framgu","position":null,"esLider":false,"habilitarEdicion":false,"idRol":0,"descRol":null,"mail":"c.framgu@ternium.com.mx"}');
    }


    this.ngxService.start(); // start foreground loading with 'default' id
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 2000);
  }
}
