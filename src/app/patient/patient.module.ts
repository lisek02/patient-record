import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { PatientComponent } from './patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  imports:      [ 
    CommonModule,
    SharedModule,
    IonicModule.forRoot(PatientDetailsComponent)
  ],
  declarations: [
    PatientComponent,
    PatientDetailsComponent
  ],
  exports: [
    PatientComponent
  ],
  entryComponents: [
    PatientComponent
  ]
})

export class PatientModule {}