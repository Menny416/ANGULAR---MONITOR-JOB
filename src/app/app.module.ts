import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from './services/messaging.service';
// VARIABLES DE AMBIENTE
import { environment } from '../environments/environment';
// MODULOS
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
// Modulos Plugins
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, POSITION } from 'ngx-ui-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgPipesModule } from 'ngx-pipes';
import { GeneralInterceptorService } from './interceptors/general-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';


/*
-- Configuracion
*/
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#2ef700',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'rectangle-bounce',
  blur: 5,
  fgsColor: '#FFAA00',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'rectangle-bounce',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  // logoUrl: 'assets/images/logo.jpg',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(255,254,254,0.87)',
  pbColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 5,
  hasProgressBar: true,
  text: 'Monitor JOBS',
  textColor: '#000000',
  textPosition: 'center-center',
  // threshold: 500
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    PipesModule,
    NgPipesModule,
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireMessagingModule,
    LayoutModule,
    PagesModule,
    ComponentsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
     NgxUiLoaderHttpModule.forRoot({
       showForeground: true,
       exclude: [
         `${environment.URL_SER}monitor/SearchUserAD`,
         `${environment.URL_SER}monitor/SendNotificacionMail`,
         `${environment.URL_SER}monitor/addJob`,
         `${environment.URL_SER}monitor/joberror`,
         `${environment.URL_SER}monitor/Sigla`,
       ]
     }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    // MessagingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
