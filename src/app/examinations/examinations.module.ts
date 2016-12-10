import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { ExaminationsComponent } from './examinations.component';
import { ExaminationsSegmentsComponent } from './examinations-segments/examinations-segments.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(ExaminationsComponent)
  ],
  declarations: [
    ExaminationsComponent,
    ExaminationsSegmentsComponent
  ],
  exports: [
    ExaminationsComponent
  ],
  entryComponents: [
    ExaminationsComponent
  ]
})

export class ExaminationsModule {}
