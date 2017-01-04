import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Visit from '../visit.model';

@Component({
  selector: 'visits-segments',
  templateUrl: 'visits-segments.html'
})

export class VisitsSegmentsComponent implements OnInit {
  @Input() visits: Observable<Visit>[];

  pastVisits: Observable<Visit[]>;
  plannedVisits: Observable<Visit[]>;
  selectedTab: string = 'planned';

  ngOnInit() {
    this.pastVisits = this.visits[0].toArray();
    this.plannedVisits = this.visits[1].toArray();
  }
}
