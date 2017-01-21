import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  imports:      [ 
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(TitleBarComponent)
  ],
  declarations: [
    TitleBarComponent,
    SpinnerComponent,
    GenderPipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TitleBarComponent,
    SpinnerComponent,
    GenderPipe
  ],
  providers: [ ]
})

export class SharedModule {}
