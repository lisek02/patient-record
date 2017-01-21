import { Component } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import Prescription from './prescription.model';

@Component({
  selector: 'prescriptions',
  templateUrl: 'prescriptions.html'
})

export class PrescriptionsComponent {
  prescriptionsData: Prescription[];

  constructor(
    private requestsService: RequestsService
  ) {
    this.requestsService.get('prescription')
      .subscribe((response: any) => {
        this.prescriptionsData = JSON.parse(response._body);
      });
  }
}