import { Component } from '@angular/core';
import Prescription from './prescription.model';

@Component({
  selector: 'prescriptions',
  templateUrl: 'prescriptions.html'
})

export class PrescriptionsComponent {
  private prescriptionsData: Prescription[];

  constructor() {
    this.prescriptionsData = [
      {
        date: new Date(2006, 3, 4),
        doctor: 'Han Solo',
        drugs: ['Aspiryna 20mg', 'Witamina C 500mg', 'Ibuprom']
      },
      {
        date: new Date(2008, 3, 6),
        doctor: 'Leia Organa',
        drugs: ['Witamina C 500mg', 'Aspiryna 20mg', 'Ibuprom', 'Magnez']
      },
      {
        date: new Date(2009, 11, 4),
        doctor: 'Luke Skywalker',
        drugs: ['Ibuprom', 'Aspiryna 20mg', 'Witamina C 500mg', 'Coś tam']
      },
      {
        date: new Date(2006, 3, 4),
        doctor: 'Han Solo',
        drugs: ['Aspiryna 20mg', 'Witamina C 500mg', 'Ibuprom']
      }
    ]
  }
}