import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { TestloginPage } from '../pages/testlogin/testlogin';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MenuteacherPage } from '../pages/menuteacher/menuteacher';
import { MenuteachertwoPage } from '../pages/menuteachertwo/menuteachertwo';
import { MenuteacherthreePage } from '../pages/menuteacherthree/menuteacherthree';
import { QrScanPage } from '../pages/qr-scan/qr-scan';
import { CheckstudyPage } from '../pages/checkstudy/checkstudy';
import { SaveSickPage } from '../pages/save-sick/save-sick';
import { StudentviewPage } from '../pages/studentview/studentview';
import { CheckstudytwoPage } from '../pages/checkstudytwo/checkstudytwo';
import { SaveSicktwoPage } from '../pages/save-sicktwo/save-sicktwo';
import { StudentviewtwoPage } from '../pages/studentviewtwo/studentviewtwo';
import { CheckstudythreePage } from '../pages/checkstudythree/checkstudythree';
import { SaveSickthreePage } from '../pages/save-sickthree/save-sickthree';
import { StudentviewthreePage } from '../pages/studentviewthree/studentviewthree';
import { MenuparentPage } from '../pages/menuparent/menuparent';
import { ActivityviewPage } from '../pages/activityview/activityview';
import { QrCodePaPage } from '../pages/qr-code-pa/qr-code-pa';
import { BmiviewPage } from '../pages/bmiview/bmiview';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RemindcardPage } from '../pages/remindcard/remindcard';
import { TestleavePage } from '../pages/testleave/testleave';
import { SMS } from '@ionic-native/sms';
import { RemindtwoPage } from '../pages/remindtwo/remindtwo';
import { RemindthreePage } from '../pages/remindthree/remindthree';
import { ScantwoPage } from '../pages/scantwo/scantwo';
import { ScanthreePage } from '../pages/scanthree/scanthree';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    TestloginPage,
    MenuteacherPage,
    MenuteachertwoPage,
    MenuteacherthreePage,
    QrScanPage,
    CheckstudyPage,
    SaveSickPage,
    StudentviewPage,


    CheckstudytwoPage,
    SaveSicktwoPage,
    StudentviewtwoPage,

    CheckstudythreePage,
    SaveSickthreePage,
    StudentviewthreePage,

    MenuparentPage,
    ActivityviewPage,
    QrCodePaPage,
    BmiviewPage,
    RemindcardPage,
    TestleavePage,
    RemindtwoPage,
    RemindthreePage,
    ScantwoPage,
    ScanthreePage,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    TestloginPage,
    MenuteacherPage,
    MenuteachertwoPage,
    MenuteacherthreePage,
    QrScanPage,
    CheckstudyPage,
    SaveSickPage,
    StudentviewPage,


    CheckstudytwoPage,
    SaveSicktwoPage,
    StudentviewtwoPage,


    CheckstudythreePage,
    SaveSickthreePage,
    StudentviewthreePage,

    MenuparentPage,
    ActivityviewPage,
    QrCodePaPage,
    BmiviewPage,
    RemindcardPage,
    TestleavePage,
    RemindtwoPage,
    RemindthreePage,
    ScantwoPage,
    ScanthreePage,


  ],
  providers: [
    StatusBar,
    SplashScreen, BarcodeScanner, SMS,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
