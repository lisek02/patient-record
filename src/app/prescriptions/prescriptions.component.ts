import { Component } from '@angular/core';
import { PrescriptionsService } from '../core/prescriptions.service';
import Prescription from './prescription.model';

@Component({
  selector: 'prescriptions',
  templateUrl: 'prescriptions.html'
})

export class PrescriptionsComponent {
  private prescriptionsData: Prescription[];

  constructor(
    private prescriptionsService: PrescriptionsService
  ) {
    this.prescriptionsService.getPrescriptions()
      .subscribe((response: any) => {
        this.prescriptionsData = JSON.parse(response._body);
      });
  }
}