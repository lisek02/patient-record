import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
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
    this.authenticationService.login(user)
      .subscribe(response => {
        this.storage.set('token', JSON.parse(response._body).token);
        this.nav.setRoot(MainComponent);
      }, err => {
        console.log(err);
      })
  }
}