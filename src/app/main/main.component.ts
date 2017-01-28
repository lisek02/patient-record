import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Nav } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PatientComponent } from '../patient/patient.component';
import { AuthenticationService } from '../core/authentication.service';
import { LoginComponent } from '../login/login.component';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { ExaminationsComponent } from '../examinations/examinations.component';
import { VisitsComponent } from '../visits/visits.component';
import { RequestsService } from '../core/requests.service';
import Patient from '../patient/patient.model';

@Component({
  selector: 'main',
  templateUrl: 'main.html',
  styles: ['main.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class MainComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = PatientComponent;
  pages: Array<{title: string, component: any}>;
  patientData: Observable<Patient>;

  constructor(
    private authenticationService: AuthenticationService,
    private requestsService: RequestsService
  ) {
    this.pages = [
        { title: 'Patient', component: PatientComponent },
        { title: 'Visits', component: VisitsComponent },
        { title: 'Prescriptions', component: PrescriptionsComponent },
        { title: 'Examinations', component: ExaminationsComponent }
    ];
    this.patientData = this.authenticationService.getCurrentUser();
  }

  openPage(page) {
    this.authenticationService.isAuthenticated().subscribe((token) => {
      !!token ? this.nav.push(page.component) : this.nav.setRoot(LoginComponent);
    });
  }

  logOut() {
    this.authenticationService.logout().subscribe(() => {
      this.nav.setRoot(LoginComponent)
    });
  }
}
