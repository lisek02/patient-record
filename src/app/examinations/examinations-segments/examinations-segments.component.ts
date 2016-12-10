import { Component, Input } from '@angular/core';
import Examination from '../examination.model';

@Component({
  selector: 'examinations-segments',
  templateUrl: 'examinations-segments.html'
})

export class ExaminationsSegmentsComponent {
  @Input() examinations: { pastExaminations: Examination[], plannedExaminations: Examination[] };

  selectedTab: string = 'planned';
}
