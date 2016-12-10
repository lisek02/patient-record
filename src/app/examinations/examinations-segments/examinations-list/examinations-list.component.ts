import { Component, Input } from '@angular/core';
import Examination from '../../examination.model';

@Component({
  selector: 'examinations-list',
  templateUrl: 'examinations-list.html'
})

export class ExaminationsListComponent {
  @Input() examinations: Examination[];
}