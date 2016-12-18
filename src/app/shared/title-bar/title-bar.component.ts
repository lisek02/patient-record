import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'title-bar',
  templateUrl: 'title-bar.html',
  styles: ['title-bar.scss']
})

export class TitleBarComponent{
  constructor(private authenticationService: AuthenticationService) {}

  @Input() title: string;
}
