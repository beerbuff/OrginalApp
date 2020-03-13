import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveSickPage } from './save-sick';

@NgModule({
  declarations: [
    SaveSickPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveSickPage),
  ],
})
export class SaveSickPageModule {}
