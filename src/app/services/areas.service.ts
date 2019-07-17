import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AreaModel } from '../models/area.model';


@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private http: HttpClient, private router: Router) { }

  agregar(area: AreaModel) {
    const url = environment.URL_SER + `grid/AddAreas`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: AreaModel) {
    const url = environment.URL_SER + `grid/AddAreas`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `grid/DeleteAreas?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `grid/GetAreaById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }

}
