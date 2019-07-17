import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(private http: HttpClient, private router: Router) { }

  consultarAreas() {
    const url = environment.URL_SER + `monitor/areas`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarTemas() {
    const url = environment.URL_SER + `monitor/temas`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarCriticidad() {
    const url = environment.URL_SER + `monitor/criticidad`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarEjecucion() {
    const url = environment.URL_SER + `monitor/ejecucion`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarMonitoreo() {
    const url = environment.URL_SER + `monitor/monitoreo`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarPaquete() {
    const url = environment.URL_SER + `monitor/paquete`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarResponsables() {
    const url = environment.URL_SER + `monitor/responsables`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarSigla(sigla: string) {
    const url = environment.URL_SER + `monitor/SearchUserAD?sigla=${sigla}`;
    const resultado = this.http.get(url);
    return resultado;
  }
}
