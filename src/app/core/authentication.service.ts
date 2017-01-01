import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { ConstantsService } from './constants.service';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticationService {
  isUserAuthenticated: Observable<any>;
  
  constructor(
    private http: Http,
    private constantsService: ConstantsService,
    private storage: Storage
  ) {
    this.isUserAuthenticated = Observable.fromPromise(this.storage.get('token'));
  }

  login(user): Observable<any> {
    return this.http.post(this.constantsService.authUrl, user);
  }

  logout(): Observable<any> {
    return Observable.fromPromise(this.storage.remove('token')
      .then((response) => {
        return response;
      })
    );
  }

  isAuthenticated(): Observable<any> {
    return Observable.fromPromise(this.storage.get('token'));
  }
}