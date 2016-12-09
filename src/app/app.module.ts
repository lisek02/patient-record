import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { PatientModule } from './patient/patient.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    NavigationModule,
    PatientModule,
    PrescriptionsModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp
  ],
})

export class AppModule {}
