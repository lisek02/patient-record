import { Component, Input } from '@angular/core';
import Patient from '../../patient/patient.model';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.html'
})

export class AvatarComponent {
  @Input() patient: Patient;
}