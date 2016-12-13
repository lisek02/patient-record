import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public serverUrl: string = 'https://fast-tor-25040.herokuapp.com/';
  public apiUrl: string = this.serverUrl + 'api/';
  public authUrl: string = this.serverUrl + 'api-token-auth/'
}

