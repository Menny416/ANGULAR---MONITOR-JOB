import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './completo/header/header.component';
import { SidebarComponent } from './completoMenu/sidebar/sidebar.component';
import { SubHeaderComponent } from './completo/sub-header/sub-header.component';
import { FooterComponent } from './completo/footer/footer.component';
import { RightSidebarComponent } from './completoMenu/right-sidebar/right-sidebar.component';
import { CompletoComponent } from './completo/completo.component';
import { NgPipesModule } from 'ngx-pipes';
import { PipesModule } from '../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompletoHelpDeskComponent } from './completoHelpDesk/completo-help-desk.component';
import { BreadcumComponent } from './completo/breadcum/breadcum.component';
import { HeaderCMComponent } from './completoMenu/header-cm/header-cm.component';
import { CompletoMenuComponent } from './completoMenu/completo-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SubHeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    CompletoComponent,
    CompletoHelpDeskComponent,
    BreadcumComponent,
    HeaderCMComponent,
    CompletoMenuComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    NgPipesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SubHeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    CompletoComponent,
    CompletoHelpDeskComponent
  ]
})
export class LayoutModule { }
