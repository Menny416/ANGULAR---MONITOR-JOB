import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  constructor(private http: HttpClient) { }

  agregar(area: Usuario) {
    const url = environment.URL_SER + `User/AddUser`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  editar(area: Usuario) {
    const url = environment.URL_SER + `User/AddUser`;
    const resultado = this.http.post(url, area);
    return resultado;
  }

  borrar(areaId: number) {
    const url = environment.URL_SER + `User/DeleteUsuario?AreaId=${areaId}`;
    const resultado = this.http.delete(url);
    return resultado;
  }

  getBtyId(Id: number) {
    const url = environment.URL_SER + `User/GetUserById?Id=${Id}`;
    const resultado = this.http.get(url);
    return resultado;
  }

  getLideres() {
    const url = environment.URL_SER + `User/GetLideres`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
