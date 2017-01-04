import { Component } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import { Observable } from 'rxjs/Observable';
import Visit from './visit.model';

@Component({
  selector: 'visits',
  templateUrl: 'visits.html'
})

export class VisitsComponent {
  visitsData: Observable<Visit>[];

  constructor(
    private requestsService: RequestsService
  ) {
    this.visitsData = this.requestsService.get('visit')
      .flatMap((response: any) => response.json())
      .partition((visit: any) => new Date(visit.time) <= new Date());
  };
};
