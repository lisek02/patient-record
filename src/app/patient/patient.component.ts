import { Component } from '@angular/core';
import Patient from './patient.model';

@Component({
  selector: 'patient',
  templateUrl: 'patient.html'
})

export class PatientComponent {
  private patientData: Patient;

  constructor() {
    this.patientData = {
      firstName: 'Jan',
      lastName: 'Kowalski',
      birthDate: new Date(1992, 3, 4),
      gender: 'Male',
      address: 'Dąbrowskiego 34',
      postalCode: '61-123',
      city: 'Poznań',
      image: 'assets/images/mr_potatoe.png'
    }
  }
}