import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';
import { SiglaService } from 'src/app/services/sigla.service';
import { Configuracion } from 'src/app/models/configuracion.model';
import { UsuarioServicioService } from '../../../../services/usuario-servicio.service';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  @ViewChild('txtBusquedaResponsable', {static: true}) txtBusquedaResponsable: ElementRef;
   usuario: Usuario = new Usuario();

  spinBotonBuscar = false;
  selResponsable = false;
  data = [ ];
  model: Configuracion = new Configuracion();
  items: any = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sigla: SiglaService,
              private listas: ListasService,
              private usuarioS: UsuarioServicioService) {}

    submit(forma: NgForm) {
      // console.log(forma);
      if (forma.valid === false) {
        Swal.fire('Ha ocurrido un error', 'Favor de revisar la informacion', 'error');
        return;
      }

      this.usuario.celular = forma.value.celular;
      this.usuario.extension = forma.value.extension;
      this.usuario.telefono = forma.value.telefono;
      // this.usuario.jefeId = this.value.id;

      this.usuarioS.agregar(this.usuario).subscribe((res: any) => {
        if (res.succes === false) {
          Swal.fire('Ha ocurrido un error', res.message, 'error');
        }
        Swal.fire('Se ha agregardo correctamente', '', 'success').then((result) => {
          this.router.navigate(['/administracion/usuarios/']);
        });
      }, err => {
        Swal.fire('Ha ocurrido un error', err, 'error');
      });
    }

    ngOnInit() {
      this.cargarLideres();
    }

    consultarSiglas(val: any) {
      if (val.value.length > 3) {
        this.spinBotonBuscar = true;
        this.data = [];
        this.listas.consultarSigla(val.value).subscribe(
           (res: any) => {
              this.data = res.data;
              setTimeout(() => {
                $('#responsableId').val(0);
                $('#responsableId').prop('disabled', '');
                this.selResponsable = true;
                this.spinBotonBuscar = false;
              }, 2000);
        }, (err: any) => {
              this.selResponsable = true;
              this.spinBotonBuscar = false;
        });
      } else {
        Swal.fire('Minimo 4 caracteres', '', 'warning');
      }
    }

    openModalResponsables() {
      $('#mResponsable').modal('show');
      $(window).on('shown.bs.modal', () => {
        $('#responsableId').val(0);
        $('#responsableId').prop('disabled', 'disabled');
        $('#txtNombreResponsable').show().select().val('').focus();
      });
    }

    closeModalResponsables(responsable: any) {
      let res: any;
      res = JSON.parse(responsable);
      if (res !== 0) {
        console.log('close modal', res);
        this.usuario.nombre = res.nombre;
        this.usuario.correo = res.correo;
        this.usuario.sigla = res.sigla;
      } else {
        Swal.fire('Error', 'Favor de seleccionar un responsable', 'error');
        return;
      }
      $('#mResponsable').modal('hide');
      $(window).on('hidden.bs.modal', () => {
        $('#responsableId').val(0);
        $('#txtNombreResponsable').show().select().val('').focus();
      });
    }
  cargarLideres() {
    this.usuarioS.getLideres().subscribe((res: any ) => {
      console.log('lideres', res);
      this.items = res.data;
    });
  }

}
