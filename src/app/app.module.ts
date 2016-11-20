import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PatientModule } from './patient/patient.module';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    PatientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PatientComponent
  ],
  providers: []
})

export class AppModule {}
