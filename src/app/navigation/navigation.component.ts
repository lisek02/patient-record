import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Nav } from 'ionic-angular';
import { PatientComponent } from '../patient/patient.component';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { ExaminationsComponent } from '../examinations/examinations.component';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html',
  styles: ['navigation.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class NavigationComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = PatientComponent;
  pages: Array<{title: string, component: any}>;
  basicPatientData: { firstName: string, lastName: string, image: string };

  constructor() {
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
