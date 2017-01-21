import { Component } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'examinations',
  templateUrl: 'examinations.html'
})

export class ExaminationsComponent {
  // TO DO check types
  examinationsData: Observable<{}>[];

  constructor(
    private requestsService: RequestsService
  ) {
    this.examinationsData = this.requestsService.get('test')
      .flatMap((response: any) => response.json())
      .partition((examination: any) => new Date(examination.time) <= new Date());
  };
};
