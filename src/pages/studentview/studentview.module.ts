import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentviewPage } from './studentview';

@NgModule({
  declarations: [
    StudentviewPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentviewPage),
  ],
})
export class StudentviewPageModule {}
