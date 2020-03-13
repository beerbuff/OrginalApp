import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodePaPage } from './qr-code-pa';

@NgModule({
  declarations: [
    QrCodePaPage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodePaPage),
  ],
})
export class QrCodePaPageModule {}
