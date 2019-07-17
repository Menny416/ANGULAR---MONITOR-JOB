import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/tema';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  agregar(area: Tema) {
    const url = environment.URL_SER + `grid/AddTema`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Tema) {
    const url = environment.URL_SER + `grid/AddTema`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteTema?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetTemaById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
