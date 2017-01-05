import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports:      [ 
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(TitleBarComponent)
  ],
  declarations: [
    TitleBarComponent,
    SpinnerComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TitleBarComponent,
    SpinnerComponent
  ],
  providers: [ ]
})

export class SharedModule {}
