import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';
import { QrScanPage } from '../qr-scan/qr-scan';
import { CheckstudyPage } from '../checkstudy/checkstudy';
import { SaveSickPage } from '../save-sick/save-sick';
import { StudentviewPage } from '../studentview/studentview';


/**
 * Generated class for the MenuteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuteacher',
  templateUrl: 'menuteacher.html',
})
export class MenuteacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuteacherPage');
  }
  

  QrScan(){
    this.navCtrl.push(QrScanPage)
  }
  Checkstudy(){
    this.navCtrl.push(CheckstudyPage)
  }
  SaveSick(){
    this.navCtrl.push(SaveSickPage)
  }
  Studentview(){
    this.navCtrl.push(StudentviewPage)
  }



  clearst(){
    this.storage.clear();
    // this.storage.get('teacher_id').then((val) => {
   
    //   if(val == null){
       this.navCtrl.push(WelcomePage)
    //     console.log(val);
    //   }
    // })
   
}

  

}//end class
