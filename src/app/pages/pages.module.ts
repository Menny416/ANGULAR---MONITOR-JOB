import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PipesModule } from '../pipes/pipes.module';
import { NgPipesModule } from 'ngx-pipes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE, DateTimeAdapter } from 'ng-pick-datetime';

import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';

import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
// COMPONENTS
import { InicioComponent } from './inicio/inicio.component';
import { Demo1Component } from './monitor/demo1/demo1.component';
import { CriticosComponent } from './tablero/criticos/criticos.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ListadoJobsComponent } from './configuracion/listado-jobs/listado-jobs.component';
import { AgregarJobComponent } from './configuracion/agregar-job/agregar-job.component';
import { MonitorComponent } from './monitor/monitor.component';
import { SdinicioComponent } from './servicedesk/sdinicio/sdinicio.component';
import { TicketCrearComponent } from './servicedesk/ticket/ticket-crear/ticket-crear.component';
import { MensualComponent } from './tablero/mensual/mensual.component';
import { ServidoresComponent } from './catalogos/servidores/servidores.component';
import { UsuariosComponent } from './catalogos/usuarios/usuarios.component';
import { AreasComponent } from './catalogos/areas/areas.component';
import { TemasComponent } from './catalogos/temas/temas.component';
import { CriticidadComponent } from './catalogos/criticidad/criticidad.component';
import { EjecucionComponent } from './catalogos/ejecucion/ejecucion.component';
import { MonitoreoComponent } from './catalogos/monitoreo/monitoreo.component';
import { PaqueteComponent } from './catalogos/paquete/paquete.component';
import { VistasComponent } from './catalogos/vistas/vistas.component';
import { JobsComponent } from './catalogos/jobs/jobs.component';
import { ModificarAreaComponent } from './catalogos/areas/modificar-area/modificar-area.component';
import { AgregarAreaComponent } from './catalogos/areas/agregar-area/agregar-area.component';
import { AddCriticidadComponent } from './catalogos/criticidad/add-criticidad/add-criticidad.component';
import { ModificarCriticidadComponent } from './catalogos/criticidad/modificar-criticidad/modificar-criticidad.component';

import { AgregarUsuarioComponent } from './catalogos/usuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './catalogos/usuarios/modificar-usuario/modificar-usuario.component';
import { ConsultaComponent } from './log/consulta/consulta.component';
import { AgregarTemaComponent } from './catalogos/temas/agregar-tema/agregar-tema.component';
import { ModificarTemaComponent } from './catalogos/temas/modificar-tema/modificar-tema.component';
import { AgregarServidorComponent } from './catalogos/servidores/agregar-servidor/agregar-servidor.component';
import { ModificarServidorComponent } from './catalogos/servidores/modificar-servidor/modificar-servidor.component';
import { AgregarVistaComponent } from './catalogos/vistas/agregar-vista/agregar-vista.component';
import { ModificarVistaComponent } from './catalogos/vistas/modificar-vista/modificar-vista.component';
import { AgregarMonitoreoComponent } from './catalogos/monitoreo/agregar-monitoreo/agregar-monitoreo.component';
import { ModificacionMonitoreoComponent } from './catalogos/monitoreo/modificacion-monitoreo/modificacion-monitoreo.component';
import { AgregarPaqueteComponent } from './catalogos/paquete/agregar-paquete/agregar-paquete.component';
import { EditarPaqueteComponent } from './catalogos/paquete/editar-paquete/editar-paquete.component';
import { AgregarEjecucionComponent } from './catalogos/ejecucion/agregar-ejecucion/agregar-ejecucion.component';
import { ModificarEjecucionComponent } from './catalogos/ejecucion/modificar-ejecucion/modificar-ejecucion.component';
import { InicioCatalogosComponent } from './catalogos/inicio-catalogos/inicio-catalogos.component';

export const MY_CUSTOM_FORMATS = {
  parseInput: 'DD-MM-YYYY',
  fullPickerInput: 'DD-MM-YYYY hh:mm a',
  datePickerInput: 'DD-MM-YYYY',
  timePickerInput: 'hh:mm a',
  monthYearLabel: 'MMM-YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM-YYYY'
};

@NgModule({
  declarations: [
    InicioComponent,
    Demo1Component,
    CriticosComponent,
    ConfiguracionComponent,
    ListadoJobsComponent,
    AgregarJobComponent,
    MonitorComponent,
    SdinicioComponent,
    TicketCrearComponent,
    MensualComponent,
    ServidoresComponent,
    UsuariosComponent,
    AreasComponent,
    TemasComponent,
    CriticidadComponent,
    EjecucionComponent,
    MonitoreoComponent,
    PaqueteComponent,
    VistasComponent,
    JobsComponent,
    AgregarEjecucionComponent,
    ModificarEjecucionComponent,
    AgregarPaqueteComponent,
    EditarPaqueteComponent,
    AgregarMonitoreoComponent,
    ModificacionMonitoreoComponent,
    AgregarVistaComponent,
    ModificarVistaComponent,
    AgregarServidorComponent,
    ModificarServidorComponent,
    AgregarTemaComponent,
    ModificarTemaComponent,
    ModificarAreaComponent,
    AgregarAreaComponent,
    AddCriticidadComponent,
    ModificarCriticidadComponent,
    AgregarPaqueteComponent,
    EditarPaqueteComponent,
    AgregarEjecucionComponent,
    ModificarEjecucionComponent,
    AgregarTemaComponent,
    ModificarTemaComponent,
    AgregarVistaComponent,
    ModificarVistaComponent,
    AgregarMonitoreoComponent,
    ModificacionMonitoreoComponent,
    AgregarServidorComponent,
    ModificarServidorComponent,
    AgregarUsuarioComponent,
    ModificarUsuarioComponent,
    ConsultaComponent,
    InicioCatalogosComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    NgPipesModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    AutocompleteLibModule,
    NgxUiLoaderModule,
    NgxPaginationModule,
    UiSwitchModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [
    InicioComponent,
    Demo1Component,
    CriticosComponent,
    ConfiguracionComponent,
    ListadoJobsComponent,
    AgregarJobComponent,
    MonitorComponent,
    SdinicioComponent,
    TicketCrearComponent,
    MensualComponent,
    ServidoresComponent,
    UsuariosComponent,
    AreasComponent,
    TemasComponent,
    CriticidadComponent,
    EjecucionComponent,
    MonitoreoComponent,
    PaqueteComponent,
    VistasComponent,
    JobsComponent,
    AgregarEjecucionComponent,
    ModificarEjecucionComponent,
    AgregarPaqueteComponent,
    EditarPaqueteComponent,
    AgregarMonitoreoComponent,
    ModificacionMonitoreoComponent,
    AgregarVistaComponent,
    ModificarVistaComponent,
    AgregarServidorComponent,
    ModificarServidorComponent,
    AgregarTemaComponent,
    ModificarTemaComponent,
    ModificarAreaComponent,
    AgregarAreaComponent,
    AddCriticidadComponent,
    ModificarCriticidadComponent,
    ConsultaComponent
  ],
  providers: [
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS}
  ]
})
export class PagesModule {
 constructor(private config: NgSelectConfig) {
  this.config.notFoundText = 'sin datos';
 }

}
