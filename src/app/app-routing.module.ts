import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletoComponent } from './layout/completo/completo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { ListadoJobsComponent } from './pages/configuracion/listado-jobs/listado-jobs.component';
import { AgregarJobComponent } from './pages/configuracion/agregar-job/agregar-job.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { SdinicioComponent } from './pages/servicedesk/sdinicio/sdinicio.component';
import { TicketCrearComponent } from './pages/servicedesk/ticket/ticket-crear/ticket-crear.component';
import { MensualComponent } from './pages/tablero/mensual/mensual.component';
import { CompletoMenuComponent } from './layout/completoMenu/completo-menu.component';
import { AreasComponent } from './pages/catalogos/areas/areas.component';
import { CriticidadComponent } from './pages/catalogos/criticidad/criticidad.component';
import { EjecucionComponent } from './pages/catalogos/ejecucion/ejecucion.component';
import { JobsComponent } from './pages/catalogos/jobs/jobs.component';
import { MonitoreoComponent } from './pages/catalogos/monitoreo/monitoreo.component';
import { PaqueteComponent } from './pages/catalogos/paquete/paquete.component';
import { ServidoresComponent } from './pages/catalogos/servidores/servidores.component';
import { TemasComponent } from './pages/catalogos/temas/temas.component';
import { UsuariosComponent } from './pages/catalogos/usuarios/usuarios.component';
import { VistasComponent } from './pages/catalogos/vistas/vistas.component';
import { AgregarAreaComponent } from './pages/catalogos/areas/agregar-area/agregar-area.component';
import { ModificarAreaComponent } from './pages/catalogos/areas/modificar-area/modificar-area.component';
import { AddCriticidadComponent } from './pages/catalogos/criticidad/add-criticidad/add-criticidad.component';
import { ModificarCriticidadComponent } from './pages/catalogos/criticidad/modificar-criticidad/modificar-criticidad.component';
import { AgregarPaqueteComponent } from './pages/catalogos/paquete/agregar-paquete/agregar-paquete.component';
import { EditarPaqueteComponent } from './pages/catalogos/paquete/editar-paquete/editar-paquete.component';
import { AgregarEjecucionComponent } from './pages/catalogos/ejecucion/agregar-ejecucion/agregar-ejecucion.component';
import { ModificarEjecucionComponent } from './pages/catalogos/ejecucion/modificar-ejecucion/modificar-ejecucion.component';
import { AgregarTemaComponent } from './pages/catalogos/temas/agregar-tema/agregar-tema.component';
import { ModificarTemaComponent } from './pages/catalogos/temas/modificar-tema/modificar-tema.component';
import { AgregarVistaComponent } from './pages/catalogos/vistas/agregar-vista/agregar-vista.component';
import { ModificarVistaComponent } from './pages/catalogos/vistas/modificar-vista/modificar-vista.component';
import { AgregarMonitoreoComponent } from './pages/catalogos/monitoreo/agregar-monitoreo/agregar-monitoreo.component';
import { ModificacionMonitoreoComponent } from './pages/catalogos/monitoreo/modificacion-monitoreo/modificacion-monitoreo.component';
import { AgregarServidorComponent } from './pages/catalogos/servidores/agregar-servidor/agregar-servidor.component';
import { ModificarServidorComponent } from './pages/catalogos/servidores/modificar-servidor/modificar-servidor.component';
import { AgregarUsuarioComponent } from './pages/catalogos/usuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './pages/catalogos/usuarios/modificar-usuario/modificar-usuario.component';
import { ConsultaComponent } from './pages/log/consulta/consulta.component';
import { InicioCatalogosComponent } from './pages/catalogos/inicio-catalogos/inicio-catalogos.component';

const routes: Routes = [
  { path: 'login', component: InicioComponent, data: {titulo: 'LOGIN'}},
  { path: '', redirectTo: 'monitor', pathMatch: 'full', data: {titulo: 'MONITOR'} },
  {
    path: '',
    component: CompletoComponent,
    data: {titulo: 'MONITOR'},
    children: [
      { path: 'tablero', component: MensualComponent, data: {titulo: 'TABLERO'} },
      { path: 'inicio', component: InicioComponent, data: {titulo: 'INICIO'} },
      { path: 'servicio', component: SdinicioComponent, data: {titulo: 'SERVICIO'} },
      { path: 'ticket/crear', component: TicketCrearComponent, data: {titulo: 'TICKET/CREAR'} },
      { path: 'monitor', component: MonitorComponent, data: {titulo: 'MONITOR'} },
    ]
  },
  {
    path: 'configuracion',
    component: CompletoComponent,
    data: {titulo: 'MONITOR'},
    children: [
      { path: '', component: ConfiguracionComponent, data: {titulo: 'CONFIGURACION'} },
      { path: 'listado/jobs/:id', component: ListadoJobsComponent, data: {titulo: 'JOBS/LISTADO'} },
      { path: 'job/:id', component: AgregarJobComponent, data: {titulo: 'JOB'} },
      { path: 'log/:id', component: ConsultaComponent, data: {titulo: 'LOG'} },
    ]
  },
  {
    path: 'administracion',
    component: CompletoMenuComponent,
    data: {titulo: 'ADMINISTRACION'},
    children: [
      { path: '', component: InicioCatalogosComponent, data: {titulo: 'INICIO'}},
      {
        path: 'areas',
        children: [
          { path: '', component: AreasComponent, data: {titulo: 'AREAS'} },
          { path: 'agregar', component: AgregarAreaComponent, data: {titulo: 'AREAS/AGREGAR'} },
          { path: 'modificar/:id', component: ModificarAreaComponent, data: {titulo: 'AREAS/MODIFICAR'} }
        ]
      },
      { path: 'jobs', component: JobsComponent, data: {titulo: 'JOBS'} },
      { path: 'servidores',
      children: [
        { path: '', component: ServidoresComponent, data: {titulo: 'SERVIDORES'} },
        { path: 'agregar', component: AgregarServidorComponent, data: {titulo: 'SERVIDORES/AGREGAR'} },
        { path: 'modificar/:id', component: ModificarServidorComponent, data: {titulo: 'SERVIDORES/MODIFICAR'} }
      ]
    },
      { path: 'temas',
      children: [
        { path: '', component: TemasComponent, data: {titulo: 'TEMAS'} },
        { path: 'agregar', component: AgregarTemaComponent, data: {titulo: 'TEMA/AGREGAR'} },
        { path: 'modificar/:id', component: ModificarTemaComponent, data: {titulo: 'TEMA/MODIFICAR'} }
      ]
    },
      { path: 'usuarios',
      children: [
        { path: '', component: UsuariosComponent, data: {titulo: 'USUARIOS'} },
        { path: 'agregar', component: AgregarUsuarioComponent, data: {titulo: 'USUARIOS/AGREGAR'} },
        { path: 'modificar/:id', component: ModificarUsuarioComponent, data: {titulo: 'USUARIOS/MODIFICAR'} }
        ]
      },
      { path: 'vistas',  children: [
        { path: '', component: VistasComponent, data: {titulo: 'VISTAS'} },
        { path: 'agregar', component: AgregarVistaComponent, data: {titulo: 'VISTAS/AGREGAR'} },
        { path: 'modificar/:id', component: ModificarVistaComponent, data: {titulo: 'VISTAS/MODIFICAR'} }
      ]
    },
      { path: 'monitoreo',  children: [
        { path: '', component: MonitoreoComponent, data: {titulo: 'TIPO MONITOREO'} },
        { path: 'agregar', component: AgregarMonitoreoComponent, data: {titulo: 'TIPO MONIOREO/AGREGAR'} },
        { path: 'modificar/:id', component: ModificacionMonitoreoComponent, data: {titulo: 'TIPO MONITOREO/MODIFICAR'} }
      ]
    },
      { path: 'paquetes',
      children: [
          { path: '', component: PaqueteComponent, data: {titulo: 'PAQUETES'} },
          { path: 'agregar', component: AgregarPaqueteComponent, data: {titulo: 'PAQUETES/AGREGAR'} },
          { path: 'modificar/:id', component: EditarPaqueteComponent, data: {titulo: 'PAQUETES/MODIFICAR'} }
        ]
      },
      // { path: 'criticidad', component: CriticidadComponent, data: {titulo: 'TIPO DE CRITICIDAD'} },
      {
        path: 'criticidad',
        children: [
          { path: '', component: CriticidadComponent, data: {titulo: 'TIPO DE CRITICIDAD'} },
          { path: 'agregar', component: AddCriticidadComponent, data: {titulo: 'TIPO CRITICIDAD/AGREGAR'} },
          { path: 'modificar/:id', component: ModificarCriticidadComponent, data: {titulo: 'TIPO CRITICIDAD/MODIFICAR'} }
        ]
      },
      { path: 'ejecucion',
      children: [
        { path: '', component: EjecucionComponent, data: {titulo: 'TIPO DE EJECUCION'} },
        { path: 'agregar', component: AgregarEjecucionComponent, data: {titulo: 'TIPO EJECUCION/AGREGAR'} },
        { path: 'modificar/:id', component: ModificarEjecucionComponent, data: {titulo: 'TIPO EJECUCION/MODIFICAR'} }
        ]
      },
    ]
  },
  { path: '**', redirectTo: '/404', data: {titulo: '404'} },
  { path: '404', component: InicioComponent, data: {titulo: '404'} },
  { path: '**', component: InicioComponent, data: {titulo: '404'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
