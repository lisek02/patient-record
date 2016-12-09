import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { ExaminationsComponent } from './examinations.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(ExaminationsComponent)
  ],
  declarations: [
    ExaminationsComponent
  ],
  exports: [
    ExaminationsComponent
  ],
  entryComponents: [
    ExaminationsComponent
  ]
})

export class ExaminationsModule {}
