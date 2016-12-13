import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Nav } from 'ionic-angular';
import { PatientComponent } from '../patient/patient.component';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})

export class LoginComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private storage: Storage,
    private nav: Nav
  ) {}

  login(user) {
    this.authenticationService.login(user)
      .subscribe(response => {
        this.storage.set('token', JSON.parse(response._body).token);
        this.nav.goToRoot(PatientComponent);
      }, err => {
        console.log(err);
      })
  }
}