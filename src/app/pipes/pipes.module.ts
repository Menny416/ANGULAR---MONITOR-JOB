import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { RecursosPipe } from './recursos.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagenPipe,
    RecursosPipe
  ],
  exports: [
    ImagenPipe,
    RecursosPipe
  ]
})
export class PipesModule { }
