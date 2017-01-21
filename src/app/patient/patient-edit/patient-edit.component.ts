import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PatientComponent } from '../patient.component';
import { RequestsService } from '../../core/requests.service';
import { AuthenticationService } from '../../core/authentication.service';
import Patient from '../patient.model';

@Component({
  selector: 'patientEdit',
  templateUrl: './patient-edit.html'
})

export class PatientEditComponent implements OnInit {
  user: Patient;

  constructor(
    private requestsService: RequestsService,
    private nav: NavController,
    private navParams: NavParams,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = this.navParams.get('patient');
  }

  submit(userData) {
    this.requestsService.put('current_user', userData).subscribe(() => {
      this.nav.setRoot(PatientComponent);
    });
  }
}