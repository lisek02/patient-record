import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { PrescriptionsComponent } from './prescriptions.component';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(PrescriptionsListComponent)
  ],
  declarations: [
    PrescriptionsComponent,
    PrescriptionsListComponent
  ],
  exports: [
    PrescriptionsComponent
  ],
  entryComponents: [
    PrescriptionsComponent
  ]
})

export class PrescriptionsModule {}
