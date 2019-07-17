import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient, private _router: Router) { }

  consultarJob(estatus: number, tiempo: number) {
    const url = environment.URL_SER + `monitor/joberror?pEstatus=${estatus}&pTiempo=${tiempo}`;
    const resultado = this._http.get(url);
    return resultado;
  }

  consultarServidores() {
    const url = environment.URL_SER + `monitor/servidores/`;
    const resultado = this._http.get(url);
    return resultado;
  }


}
