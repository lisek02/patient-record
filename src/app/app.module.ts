import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { NavigationComponent } from './navigation/navigation.component';
import { PatientModule } from './patient/patient.module';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    NavigationModule,
    PatientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NavigationComponent,
    PatientComponent
  ],
  providers: []
})

export class AppModule {}
