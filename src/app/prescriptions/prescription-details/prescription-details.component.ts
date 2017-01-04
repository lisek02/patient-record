import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'prescription-details',
  templateUrl: 'prescription-details.html'
})
export class PrescriptionDetailsComponent {
  prescription;

  constructor(
    private navParams: NavParams
  ) {
    this.prescription = this.navParams.get('prescription');
  }
}