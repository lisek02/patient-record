import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { VisitsComponent } from './visits.component';
import { VisitsSegmentsComponent } from './visits-segments/visits-segments.component';
import { VisitsListComponent } from './visits-segments/visits-list/visits-list.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(VisitsComponent)
  ],
  declarations: [
    VisitsComponent,
    VisitsSegmentsComponent,
    VisitsListComponent
  ],
  exports: [
    VisitsComponent
  ],
  entryComponents: [
    VisitsComponent
  ]
})

export class VisitsModule {}
