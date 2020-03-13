import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmiviewPage } from './bmiview';

@NgModule({
  declarations: [
    BmiviewPage,
  ],
  imports: [
    IonicPageModule.forChild(BmiviewPage),
  ],
})
export class BmiviewPageModule {}
