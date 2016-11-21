import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  imports:      [ 
    CommonModule,
    IonicModule.forRoot(TitleBarComponent)
  ],
  declarations: [
    TitleBarComponent
  ],
  exports: [
    TitleBarComponent
  ],
  providers: [ ]
})

export class SharedModule {}