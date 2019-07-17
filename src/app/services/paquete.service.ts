import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paquete } from '../models/paquete';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private http: HttpClient) { }

  agregar(area: Paquete) {
    const url = environment.URL_SER + `grid/AddPaquete`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Paquete) {
    const url = environment.URL_SER + `grid/AddPaquete`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeletePaquete?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetPaqueteById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
