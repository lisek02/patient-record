import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VisitDetailsComponent } from '../../visit-details/visit-details.component';
import Visit from '../../visit.model';

@Component({
  selector: 'visits-list',
  templateUrl: 'visits-list.html'
})

export class VisitsListComponent {
  @Input() visits: Visit[];

  constructor(
    private navController: NavController
  ) {}

  openVisit(visit) {
    this.navController.push(VisitDetailsComponent, { visit });
  }
}
