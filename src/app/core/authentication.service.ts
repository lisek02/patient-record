import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { ConstantsService } from './constants.service';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticationService {
  isAuthenticated: boolean = false;
  
  constructor(
    private http: Http,
    private constantsService: ConstantsService,
    private storage: Storage
  ) {}

  login(user): Observable<any> {
    const loginRequest = this.http.post(this.constantsService.authUrl, user);

    loginRequest.subscribe(() => {
      this.isAuthenticated = true;
    }, () => {
      this.isAuthenticated = false;
    });

    return loginRequest;
  }
}