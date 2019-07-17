import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { Configuracion } from 'src/app/models/configuracion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SiglaService } from 'src/app/services/sigla.service';
import { ListasService } from 'src/app/services/listas.service';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html'
})
export class ModificarUsuarioComponent implements OnInit {
  @ViewChild('txtBusquedaResponsable', {static: true}) txtBusquedaResponsable: ElementRef;
  usuario: Usuario = new Usuario();

  spinBotonBuscar = false;
  selResponsable = false;
  data = [ ];
  items: any = [];

  model: Configuracion = new Configuracion();

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
        Swal.fire('Se ha modificado correctamente', '', 'success').then((result) => {
          this.router.navigate(['/administracion/usuarios/']);
        });
      }, err => {
        Swal.fire('Ha ocurrido un error', err, 'error');
      });
    }

    ngOnInit() {
      this.cargarLideres();
      this.route.params.subscribe(param => {
        this.usuario.usuarioId = parseInt(param.id, 0);
        this.usuarioS.getBtyId(this.usuario.usuarioId).subscribe((res: any) => {
          this.usuario = res.data;
          // console.log('select', this.mySelectComponent);
         });
      });
      // this.usuarioS.getBtyId()
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
