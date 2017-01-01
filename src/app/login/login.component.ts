import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MainComponent } from '../main/main.component';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})

export class LoginComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private storage: Storage,
    private nav: NavController
  ) {}

  login(user) {
    this.authenticationService.login(user).flatMap(response => {
      return this.setToken(JSON.parse(response._body).token);
    }).subscribe(() => this.nav.setRoot(MainComponent));
  }

  private setToken(token): Observable<any> {
    return Observable.fromPromise(this.storage.set('token', token));
  }
}