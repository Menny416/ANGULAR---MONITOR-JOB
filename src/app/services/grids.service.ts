import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GridsService {

  constructor(private http: HttpClient, private router: Router) { }

  consultarGridAreas(activo: number) {
    const url = environment.URL_SER + `grid/GetAreasGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridJobs(activo: number) {
    const url = environment.URL_SER + `grid/GetJobsGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridServidores(activo: number) {
    const url = environment.URL_SER + `grid/GetServidoresGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridTemas(activo: number) {
    const url = environment.URL_SER + `grid/GetTemasGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridCriticidad(activo: number) {
    const url = environment.URL_SER + `grid/GetCriticidadGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridEjecucion(activo: number) {
    const url = environment.URL_SER + `grid/GetEjecucionGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridMonitoreo(activo: number) {
    const url = environment.URL_SER + `grid/GetMonitoreoGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridPaquete(activo: number) {
    const url = environment.URL_SER + `grid/GetPaqueteGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridVistas(activo: number) {
    const url = environment.URL_SER + `grid/GetVistasGrid?Id=${activo}`;
    const resultado = this.http.get(url);
    return resultado;
  }
  consultarGridUsuarios() {
    const url = environment.URL_SER + `grid/GetUsuariosGrid`;
    const resultado = this.http.get(url);
    return resultado;
  }


}
