import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule
  ],
  declarations: [
    MainComponent,
  ],
  exports: [
    MainComponent
  ],
  entryComponents: [
    MainComponent
  ]
})

export class MainModule {}
