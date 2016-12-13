import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  imports:      [ 
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(TitleBarComponent)
  ],
  declarations: [
    TitleBarComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TitleBarComponent
  ],
  providers: [ ]
})

export class SharedModule {}
