import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'title-bar',
  templateUrl: 'title-bar.html',
  styles: ['title-bar.scss'],
})

export class TitleBarComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) {
    this.isAuthenticated = this.authenticationService.isAuthenticated().first().map(item => !!item);
  }

  @Input() title: string;
}
