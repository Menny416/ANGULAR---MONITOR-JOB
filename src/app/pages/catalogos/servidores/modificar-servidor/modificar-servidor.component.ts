import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ServidoresService } from 'src/app/services/servidores.service';
import { Servidor } from 'src/app/models/servidor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-servidor',
  templateUrl: './modificar-servidor.component.html'
})
export class ModificarServidorComponent implements OnInit {
  servidor: Servidor = new Servidor();

  constructor(private ServidorS: ServidoresService, private route: ActivatedRoute, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }
    this.servidor.servidor = forma.value.servidor;
    this.servidor.conexion = forma.value.conexion;
    this.servidor.esActivo = forma.value.esActivo;

    this.ServidorS.agregar(this.servidor).subscribe(
      (res: any) => {
        if (res.succes === false) {
          Swal.fire('Ha ocurrido un error', res.message, 'error');
        }
        Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
          this.router.navigate(['/administracion/servidores/']);
        });
      }, err => {
        Swal.fire('Ha ocurrido un error', err, 'error');
      });
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.servidor.servidorId = parseInt(param.id, 0);
      this.ServidorS.getBtyId(this.servidor.servidorId).subscribe((res: any) => {
        this.servidor = res.data;

        console.log(res.data);
       });
    });
  }

  esActivoMod(val: any) {
    this.servidor.esActivo = val;
  }
}
