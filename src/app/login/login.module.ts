import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  entryComponents: [
    LoginComponent
  ]
})

export class LoginModule {}
