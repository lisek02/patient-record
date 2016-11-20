import { Component, Input } from '@angular/core';
import Patient from '../patient.model';

@Component({
  selector: 'patient-details',
  templateUrl: 'patient-details.html',
  styles: ['patient-details.scss']
})

export class PatientDetailsComponent {
  @Input() patient: Patient;
}