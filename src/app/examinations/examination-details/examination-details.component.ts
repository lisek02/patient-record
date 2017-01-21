import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import Examination from '../examination.model';

@Component({
  selector: 'examination-details',
  templateUrl: './examination-details.html'
})

export class ExaminationDetailsComponent {
  examination: Examination;

  constructor(
    private navParams: NavParams
  ) {
    this.examination = this.navParams.get('examination');
  }
}
