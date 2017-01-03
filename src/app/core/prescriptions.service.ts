import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { ConstantsService } from './constants.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PrescriptionsService {
  constructor(
    private http: Http,
    private constantsService: ConstantsService,
    private authenticationService: AuthenticationService
  ) {}

  getPrescriptions() {
    return this.authenticationService.isAuthenticated().flatMap(token => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Authorization', `Token ${token}`);
      let options = new RequestOptions({ headers: headers });

      return this.http.get(`${this.constantsService.apiUrl}prescription/`, options);
    });
  }
}