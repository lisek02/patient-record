import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule
  ],
  declarations: [
    MainComponent,
    AvatarComponent
  ],
  exports: [
    MainComponent
  ],
  entryComponents: [
    MainComponent
  ]
})

export class MainModule {}
