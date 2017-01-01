import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Nav } from 'ionic-angular';
import { PatientComponent } from '../patient/patient.component';
import { AuthenticationService } from '../core/authentication.service';
import { LoginComponent } from '../login/login.component';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { ExaminationsComponent } from '../examinations/examinations.component';

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
  basicPatientData: { firstName: string, lastName: string, image: string };

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.pages = [
        { title: 'Patient', component: PatientComponent },
        { title: 'Visits', component: PatientComponent },
        { title: 'Prescriptions', component: PrescriptionsComponent },
        { title: 'Examinations', component: ExaminationsComponent }
    ];
    this.basicPatientData = {
      firstName: 'Jan',
      lastName: 'Kowalski',
      image: 'assets/images/mr_potatoe.png'
    }
  }

  openPage(page) {
    this.authenticationService.isAuthenticated().subscribe((token) => {
      !!token ? this.nav.setRoot(page.component) : this.nav.setRoot(LoginComponent);
    });
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }

  logOut() {
    this.authenticationService.logout().subscribe(() => {
      this.nav.setRoot(LoginComponent)
    });
  }
}
