import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { PatientModule } from './patient/patient.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { ExaminationsModule } from './examinations/examinations.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CoreModule,
    LoginModule,
    MainModule,
    PatientModule,
    PrescriptionsModule,
    ExaminationsModule
  ],
  bootstrap: [
    IonicApp
  ],
  providers: [
    Storage
  ],
  entryComponents: [
    MyApp
  ],
})

export class AppModule {}
