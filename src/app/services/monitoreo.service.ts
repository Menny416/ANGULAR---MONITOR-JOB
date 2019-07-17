import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Monitoreo } from '../models/monitoreo';

@Injectable({
  providedIn: 'root'
})
export class MonitoreoService {
  constructor(private http: HttpClient) { }

  agregar(area: Monitoreo) {
    const url = environment.URL_SER + `grid/AddMonitoreo`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Monitoreo) {
    const url = environment.URL_SER + `grid/AddMonitoreo`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteMonitoreo?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetMonitoreoById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
