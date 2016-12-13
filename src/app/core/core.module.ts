import { NgModule } from '@angular/core';
import { ConstantsService} from './constants.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  providers: [
    ConstantsService,
    AuthenticationService
  ]
})

export class CoreModule {}
