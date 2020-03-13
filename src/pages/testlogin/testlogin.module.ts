import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestloginPage } from './testlogin';

@NgModule({
  declarations: [
    TestloginPage,
  ],
  imports: [
    IonicPageModule.forChild(TestloginPage),
  ],
})
export class TestloginPageModule {}
