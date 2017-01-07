import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Examination from '../examination.model';

@Component({
  selector: 'examinations-segments',
  templateUrl: 'examinations-segments.html'
})

export class ExaminationsSegmentsComponent {
  @Input() examinations: Observable<Examination>[];

  pastExaminations: Observable<Examination[]>;
  plannedExaminations: Observable<Examination[]>;
  selectedTab: string = 'planned';

  ngOnInit() {
    this.pastExaminations = this.examinations[0].toArray();
    this.plannedExaminations = this.examinations[1].toArray();
  }
}
