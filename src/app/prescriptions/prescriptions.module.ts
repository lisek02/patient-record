import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { PrescriptionsComponent } from './prescriptions.component';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';

@NgModule({
  imports:      [ 
    CommonModule,
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
  providers: [ ]
})

export class PrescriptionsModule {}