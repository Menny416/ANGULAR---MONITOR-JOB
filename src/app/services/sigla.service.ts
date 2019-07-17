import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiglaService {

  constructor(private http: HttpClient, private router: Router) { }

  consultarSigla() {
    const url = environment.URL_SER + `monitor/Sigla`;
    const resultado = this.http.get(url);
    return resultado;
  }

  consultarUsuario(usuarioId: number) {
    const url = environment.URL_SER + `User/GetUserById?Id=${usuarioId}`;
    const resultado = this.http.get(url);
    return resultado;
  }

}
