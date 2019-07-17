import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/tema';
import { TemaService } from 'src/app/services/tema.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-tema',
  templateUrl: './modificar-tema.component.html'
})
export class ModificarTemaComponent implements OnInit {
  tema: Tema = new Tema();
  constructor(private temaService: TemaService, private route: ActivatedRoute, private router: Router) { }

  submit(forma: NgForm) {
    console.log(forma);
    if (forma.valid === false) {
      Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
      return;
    }

    this.tema.tema = forma.value.tema;
    this.tema.esActivo = forma.value.esActivo;

    this.temaService.agregar(this.tema).subscribe((res: any) => {
      if (res.succes === false) {
        Swal.fire('Ha ocurrido un error', res.message, 'error');
      }
      Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
        this.router.navigate(['/administracion/temas/']);
      });
    }, err => {
      Swal.fire('Ha ocurrido un error', err, 'error');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.tema.temaId = parseInt(param.id, 0);
      this.temaService.getBtyId(this.tema.temaId).subscribe((res: any) => {
        this.tema = res.data;
       });
    });
  }

  esActivoMod(val: any) {
    
    this.tema.esActivo = val;
  }
}
