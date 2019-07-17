import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vista } from '../models/Vista';

@Injectable({
  providedIn: 'root'
})
export class VistaService {

  constructor(private http: HttpClient) { }

  agregar(area: Vista) {
    const url = environment.URL_SER + `grid/AddVista`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Vista) {
    const url = environment.URL_SER + `grid/AddVista`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteVista?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetVistaById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
