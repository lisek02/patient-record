import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { ConstantsService } from './constants.service';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: Http,
    private constantsService: ConstantsService,
    private storage: Storage
  ) {}

  login(user): Observable<any> {
    return this.http.post(this.constantsService.authUrl, user);
  }
}