import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servidor } from '../models/servidor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  constructor(private http: HttpClient) { }

  agregar(area: Servidor) {
    const url = environment.URL_SER + `grid/AddServidor`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Servidor) {
    const url = environment.URL_SER + `grid/AddServidor`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteServidor?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetServidorById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
