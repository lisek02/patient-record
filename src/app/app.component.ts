import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AuthenticationService } from './core/authentication.service';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@Component({
  templateUrl: 'app.component.html'
})

export class MyApp {
  root: Component;

  constructor(
    public platform: Platform,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.isAuthenticated().subscribe(response => {
      return this.root = !!response ? MainComponent : LoginComponent;
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
