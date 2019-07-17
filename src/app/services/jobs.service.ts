import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient, private _router: Router) { }

  consultarJobServidor(servidorId: number) {
    const url = environment.URL_SER + `monitor/jobs?pServidorId=${servidorId}`;
    const resultado = this._http.get(url);
    return resultado;
  }

  consultarJob(jobId: number) {
    const url = environment.URL_SER + `monitor/job?id=${jobId}`;
    const resultado = this._http.get(url);
    return resultado;
  }

  agregarJob(configuracion: any) {
    const url = environment.URL_SER + `monitor/addJob`;
    const resultado = this._http.post(url, configuracion);
    return resultado;
  }

  mandarCorreo(configuracion: any): Observable<ResponseModel> {
    const url = environment.URL_SER + `monitor/SendNotificacionMail`;
    const resultado = this._http.post<ResponseModel>(url, configuracion);
    return resultado;
  }
}
