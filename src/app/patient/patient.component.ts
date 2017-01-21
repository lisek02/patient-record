import { Component, OnDestroy } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import { Observable, Subscription } from 'rxjs';
import { NavController } from 'ionic-angular';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import Patient from './patient.model';

@Component({
  selector: 'patient',
  templateUrl: 'patient.html'
})

export class PatientComponent implements OnDestroy {
  patientData: Observable<Patient>;
  patientSubscription: Subscription
  patient: Patient;

  constructor(
    private requestsService: RequestsService,
    private navController: NavController
  ) {
    this.patientData = this.requestsService.get('current_user')
      .map((response: any) => response.json());
  };

  editUser() {
    this.patientSubscription = this.patientData.subscribe(patient => {
      this.navController.push(PatientEditComponent, { patient: patient });
    });
  }

  ngOnDestroy() {
    this.patientSubscription.unsubscribe();
  }
}