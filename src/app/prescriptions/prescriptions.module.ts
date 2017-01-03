import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { PrescriptionsComponent } from './prescriptions.component';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(PrescriptionsListComponent)
  ],
  declarations: [
    PrescriptionsComponent,
    PrescriptionsListComponent,
    PrescriptionDetailsComponent
  ],
  exports: [
    PrescriptionsComponent
  ],
  entryComponents: [
    PrescriptionsComponent,
    PrescriptionDetailsComponent
  ]
})

export class PrescriptionsModule {}
