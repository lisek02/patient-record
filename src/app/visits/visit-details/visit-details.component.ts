import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import Visit from '../visit.model';

@Component({
  selector: 'visit-details',
  templateUrl: './visit-details.html'
})

export class VisitDetailsComponent {
  visit: Visit;

  constructor(
    private navParams: NavParams
  ) {
    this.visit = this.navParams.get('visit');
  }
}
