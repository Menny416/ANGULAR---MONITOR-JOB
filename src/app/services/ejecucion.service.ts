import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejecucion } from '../models/ejecucion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EjecucionService {

  constructor(private http: HttpClient) { }

  agregar(area: Ejecucion) {
    const url = environment.URL_SER + `grid/AddEjecucion`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Ejecucion) {
    const url = environment.URL_SER + `grid/AddEjecucion`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteEjecucion?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetEjecucionById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
