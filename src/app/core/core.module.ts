import { NgModule } from '@angular/core';
import { ConstantsService } from './constants.service';
import { AuthenticationService } from './authentication.service';
import { RequestsService } from './requests.service';

@NgModule({
  providers: [
    ConstantsService,
    AuthenticationService,
    RequestsService
  ]
})

export class CoreModule {}
