import { Component, Input } from '@angular/core';
import Prescription from '../prescription.model';

@Component({
  selector: 'prescriptions-list',
  templateUrl: 'prescriptions-list.html',
  styles: ['prescriptions-list.scss']
})

export class PrescriptionsListComponent {
  @Input() prescriptions: Prescription[];
}