import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { PatientComponent } from './patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientFormComponent } from './patient-edit/patient-form/patient-form.component';

@NgModule({
  imports: [ 
    SharedModule,
    IonicModule.forRoot(PatientDetailsComponent)
  ],
  declarations: [
    PatientComponent,
    PatientDetailsComponent,
    PatientFormComponent,
    PatientEditComponent
  ],
  exports: [
    PatientComponent
  ],
  entryComponents: [
    PatientComponent,
    PatientEditComponent
  ]
})

export class PatientModule {}
