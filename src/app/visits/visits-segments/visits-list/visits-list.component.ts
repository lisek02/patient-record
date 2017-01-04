import { Component, Input, OnInit } from '@angular/core';
import Visit from '../../visit.model';

@Component({
  selector: 'visits-list',
  templateUrl: 'visits-list.html'
})

export class VisitsListComponent {
  @Input() visits: Visit[];
}