import { Component } from '@angular/core';
import Examination from './examination.model';

@Component({
  selector: 'examinations',
  templateUrl: 'examinations.html'
})

export class ExaminationsComponent {
  examinationsData: { pastExaminations: Examination[], plannedExaminations: Examination[] } = {
    pastExaminations: [
      { date: new Date(2006, 3, 4), name: 'First Examination' },
      { date: new Date(2007, 3, 4), name: 'Second Examination' },
      { date: new Date(2008, 3, 4), name: 'Third Examination' }
    ],
    plannedExaminations: [
      { date: new Date(2016, 3, 4), name: 'First Planned Examination' },
      { date: new Date(2017, 3, 4), name: 'Second Planned Examination' },
      { date: new Date(2016, 3, 4), name: 'Third Planned Examination' }
    ]
  }
};
