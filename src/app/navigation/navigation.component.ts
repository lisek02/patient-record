import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})

export class NavigationComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = PatientComponent;
  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
        { title: 'Patient', component: PatientComponent },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
