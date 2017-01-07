import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ExaminationDetailsComponent } from '../../examination-details/examination-details.component';
import Examination from '../../examination.model';

@Component({
  selector: 'examinations-list',
  templateUrl: 'examinations-list.html'
})

export class ExaminationsListComponent {
  @Input() examinations: Examination[];

  constructor(
    private navController: NavController
  ) {}

  openExamination(examination) {
    console.log(examination);
    // this.navController.push(ExaminationDetailsComponent, { visit });
  }
}