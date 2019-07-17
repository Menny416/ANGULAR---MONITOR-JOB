import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private http: HttpClient) { }

  getLog(servidorId: number, fechaInicio: string, fechaFin: string) {
    const url = environment.URL_SER + `Scanner/GetLogServer?IdServidor=${servidorId}&FechaInicio=${fechaInicio}&FechaFin=${fechaFin}`;
    const resultado = this.http.get(url);
    return resultado;
  }

  getLogStatus(servidorId: number, fechaInicio: string, fechaFin: string) {
    const url = environment.URL_SER + `Scanner/GetLogServer?IdServidor=${servidorId}&FechaInicio=${fechaInicio}&FechaFin=${fechaFin}`;
    const resultado = this.http.get(url);
    return resultado;
  }

  procesar() {
    const url = environment.URL_SER + `Scanner/JobsErrors`;
    const resultado = this.http.get(url);
    return resultado;
  }


}
