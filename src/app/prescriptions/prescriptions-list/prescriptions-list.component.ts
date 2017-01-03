import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrescriptionDetailsComponent } from '../prescription-details/prescription-details.component';
import Prescription from '../prescription.model';

@Component({
  selector: 'prescriptions-list',
  templateUrl: 'prescriptions-list.html',
  styles: ['prescriptions-list.scss']
})

export class PrescriptionsListComponent {
  @Input() prescriptions: Prescription[];

  constructor(
    private navController: NavController
  ) {}

  openPrescription(prescription) {
    this.navController.push(PrescriptionDetailsComponent, { prescription });
  }
}