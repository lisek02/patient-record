import { Component } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'visits',
  templateUrl: 'visits.html'
})

export class VisitsComponent {
  // TO DO check types
  visitsData: Observable<{}>[];

  constructor(
    private requestsService: RequestsService
  ) {
    this.visitsData = this.requestsService.get('visit')
      .flatMap((response: any) => response.json())
      .partition((visit: any) => new Date(visit.time) <= new Date());
  };
};
