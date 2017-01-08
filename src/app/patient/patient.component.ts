import { Component } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import { Observable } from 'rxjs/Observable';
import Patient from './patient.model';

@Component({
  selector: 'patient',
  templateUrl: 'patient.html'
})

export class PatientComponent {
  private patientData: Observable<Patient>;

  constructor(
    private requestsService: RequestsService
  ) {
    this.patientData = this.requestsService.get('current_user')
      .map((response: any) => response.json());
  };
}