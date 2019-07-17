import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEstatusComponent } from './card-estatus/card-estatus.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraficoMensualComponent } from './grafico-mensual/grafico-mensual.component';
import { GraficoDemo1Component } from './grafico-demo1/grafico-demo1.component';
import { GraficoDemo2Component } from './grafico-demo2/grafico-demo2.component';
import { GraficoDemo3Component } from './grafico-demo3/grafico-demo3.component';

@NgModule({
  declarations: [
    CardEstatusComponent,
    FileUploadComponent,
    GraficoMensualComponent,
    GraficoDemo1Component,
    GraficoDemo2Component,
    GraficoDemo3Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    BrowserAnimationsModule 
  ],
  exports: [
    CardEstatusComponent,
    FileUploadComponent,
    GraficoMensualComponent,
    GraficoDemo1Component,
    GraficoDemo2Component,
    GraficoDemo3Component
  ]
})
export class ComponentsModule { }
