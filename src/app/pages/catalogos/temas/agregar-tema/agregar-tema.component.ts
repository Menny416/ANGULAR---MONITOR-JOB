import { Component, OnInit } from '@angular/core';
import { Tema } from '../../../../models/tema';
import { NgForm } from '@angular/forms';
import { TemaService } from '../../../../services/tema.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tema',
  templateUrl: './agregar-tema.component.html'
})
export class AgregarTemaComponent implements OnInit {
  tema: Tema = new Tema();
  constructor(private temaService: TemaService, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion' , 'error');
      return;
    }

    this.tema.tema = forma.value.tema;
    this.tema.esActivo = forma.value.esActivo;

    this.temaService.agregar(this.tema).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/temas/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  ngOnInit() {
  }

}
