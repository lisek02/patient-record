import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MainComponent } from '../main/main.component';
import { RequestsService } from '../core/requests.service';
import { AuthenticationService } from '../core/authentication.service';
import {  } from ''

@Component({
  selector: 'login',
  templateUrl: './login.html'
})

export class LoginComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private requestsService: RequestsService,
    private storage: Storage,
    private nav: NavController
  ) {}

  login(user) {
    let login: Observable<any> = this.authenticationService.login(user).flatMap(response => {
      return this.setToken(JSON.parse(response._body).token);
    });
    let getUser: Observable<any> = this.requestsService.get('current_user').flatMap((response: any) => {
      return this.setUser(JSON.parse(response._body));
    });
    login.concat(getUser).subscribe(() => this.nav.setRoot(MainComponent));
  }

  private setToken(token): Observable<any> {
    return Observable.fromPromise(this.storage.set('token', token));
  }

  private setUser(user): Observable<any> {
    return Observable.fromPromise(this.storage.set('user', user));
  }
}