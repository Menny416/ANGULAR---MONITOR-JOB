import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Criticidad } from '../models/criticidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriticidadService {

  constructor(private http: HttpClient) { }

  agregar(area: Criticidad) {
    const url = environment.URL_SER + `grid/AddCriticidad`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Criticidad) {
    const url = environment.URL_SER + `grid/AddCriticidad`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteCriticidad?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetCriticidadById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
