import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PatientComponent } from './patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  imports:      [ 
    CommonModule,
    IonicModule.forRoot(PatientDetailsComponent)
  ],
  declarations: [
    PatientComponent,
    PatientDetailsComponent
  ],
  exports: [
    PatientComponent
  ],
  providers: [ ]
})

export class PatientModule {}