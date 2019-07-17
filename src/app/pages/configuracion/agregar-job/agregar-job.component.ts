
import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasService } from '../../../services/listas.service';
import { JobsService } from '../../../services/jobs.service';
import { Configuracion } from '../../../models/configuracion.model';
import Swal from 'sweetalert2';
import { SiglaService } from '../../../services/sigla.service';


declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-agregar-job',
  templateUrl: './agregar-job.component.html',
  styleUrls: ['./agregar-job.component.css']
})
export class AgregarJobComponent implements OnInit {
  JOB: any;
  areas: any = [];
  temas: any = [];
  criticidad: any = [];
  ejecucion: any = [];
  monitoreo: any = [];
  paquetes: any = [];
  responsables: any = [];
  model: Configuracion = new Configuracion();
  servidor: any;
  keyword = 'nombre';
  data = [ ];
  usuario: any;
  spinBotonBuscar = false;
  selResponsable = false;
  @ViewChild('txtBusquedaResponsable', {static: true}) txtBusquedaResponsable: ElementRef;

  constructor(private route: ActivatedRoute,
              private listas: ListasService,
              private jobServices: JobsService,
              private router: Router,
              private sigla: SiglaService) {
    this.route.params.subscribe((parametros: any) => {
      this.JOB = JSON.parse(localStorage.getItem(parametros.id));
      this.servidor = JSON.parse( localStorage.getItem('servidor'));
    });
    this.usuario = {
      nombre: ''
    };
  }

  ngOnInit() {
    this.cargarListas();
  }

  public submit(form: any) {

    if (form.value.areaId === 0) {
      this.error('<h4>Favor de seleccionar: Area</h4>');
      return;
    }
    if (form.value.temaId === 0) {
      this.error('<h4>Favor de seleccionar: Tema</h4>');
      return;
    }
    if (form.value.tipoCriticidadId === 0) {
      this.error('<h4>Favor de seleccionar: Criticidad</h4>');
      return;
    }
    if (form.value.tipoEjecucionId === 0) {
      this.error('<h4>Favor de seleccionar: Ejecucion</h4>');
      return;
    }
    if (form.value.tipoMonitoreoId === 0) {
      this.error('<h4>Favor de seleccionar: Monitoreo</h4>');
      return;
    }
    if (form.value.areaId === 0) {
      this.error('<h4>Favor de seleccionar: Area</h4>');
      return;
    }
    if (form.value.tipoPaqueteId === 0) {
      this.error('<h4>Favor de seleccionar: Paquete</h4>');
      return;
    }
    if (form.value.responsable === 0) {
      this.error('<h4>Favor de seleccionar: Responsable</h4>');
      return;
    }
    if (form.valid === false) {
      this.error('<h4>Favor de revisar el formulario</h4>');
      return;
    }
    // ============== HACEMOS EL GUARDADO DE LOS DATOS POST
    this.model = form.value;
    this.model.claveId = form.value.JobId;
    this.model.nombre =  form.value.Jobnombre;
    this.model.responsableId = this.usuario.usuarioId;
    this.model.responsable =  this.usuario;
    this.jobServices.agregarJob(this.model).subscribe((res: any) => {
      if (res.estatus === false) {
        this.error('Ha ocurrido un error al intentar guardar.');
        return;
      }
      Swal.fire('Correcto', 'Se ha procesado la transaccion', 'success').then((result) => {
        if (result.value) {
          this.router.navigate(['/configuracion/listado/jobs/', this.servidor.servidorId]);
        }
      });
    }, error => {
      this.error('Ha ocurrido un error al procesar la solicitud.');
    });
  }


  public error(mensaje: string) {
    Swal.fire('¡Error!', mensaje, 'error');
  }

  cargarListas() {
    this.listas.consultarAreas().subscribe((res: any) => {
      this.areas = res.data;
    });
    this.listas.consultarTemas().subscribe((res: any) => {
      this.temas = res.data;
    });
    this.listas.consultarCriticidad().subscribe((res: any) => {
      this.criticidad = res.data;
    });
    this.listas.consultarEjecucion().subscribe((res: any) => {
      this.ejecucion = res.data;
    });
    this.listas.consultarMonitoreo().subscribe((res: any) => {
      this.monitoreo = res.data;
    });
    this.listas.consultarPaquete().subscribe((res: any) => {
      this.paquetes = res.data;
    }); /*
    this.listas.consultarResponsables()
    .subscribe((res: any) => {
      this.responsables = res.data;
    });*/
    this.jobServices.consultarJob(this.JOB.id).subscribe((res: any) => {
      if (res.data) {
        this.model = res.data;
        console.log(this.model);
        if (this.model.responsableId !== 0) {
          this.sigla.consultarUsuario(this.model.responsableId).subscribe( (usr: any) => {
            this.usuario = usr.data;
          });
        } else {
          this.usuario = {
            nombre: ''
          };
        }
      }
    });
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

  cambiarBusqueda() {
    this.selResponsable = false;
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
    let res = 0;
    res = JSON.parse(responsable);
    if (res !== 0) {
      this.usuario = res;
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

}
