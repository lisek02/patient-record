import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { ExaminationsComponent } from './examinations.component';
import { ExaminationsSegmentsComponent } from './examinations-segments/examinations-segments.component';
import { ExaminationsListComponent } from './examinations-segments/examinations-list/examinations-list.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(ExaminationsComponent)
  ],
  declarations: [
    ExaminationsComponent,
    ExaminationsSegmentsComponent,
    ExaminationsListComponent
  ],
  exports: [
    ExaminationsComponent
  ],
  entryComponents: [
    ExaminationsComponent
  ]
})

export class ExaminationsModule {}
