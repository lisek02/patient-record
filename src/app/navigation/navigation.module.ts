import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports:      [ 
    SharedModule,
    IonicModule.forRoot(NavigationComponent)
  ],
  declarations: [
    NavigationComponent,
  ],
  exports: [
    NavigationComponent
  ],
  entryComponents: [
    NavigationComponent
  ]
})

export class NavigationModule {}
