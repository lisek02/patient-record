import { NgModule } from '@angular/core';
import { ConstantsService } from './constants.service';
import { AuthenticationService } from './authentication.service';
import { PrescriptionsService } from './prescriptions.service';

@NgModule({
  providers: [
    ConstantsService,
    AuthenticationService,
    PrescriptionsService
  ]
})

export class CoreModule {}
