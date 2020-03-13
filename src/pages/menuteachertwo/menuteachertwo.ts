import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';
import { CheckstudytwoPage } from '../checkstudytwo/checkstudytwo';
import { SaveSicktwoPage } from '../save-sicktwo/save-sicktwo';
import { StudentviewtwoPage } from '../studentviewtwo/studentviewtwo';
import { ScantwoPage } from '../scantwo/scantwo';

/**
 * Generated class for the MenuteachertwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuteachertwo',
  templateUrl: 'menuteachertwo.html',
})
export class MenuteachertwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuteachertwoPage');
  }

  QrScantwo() {
    this.navCtrl.push(ScantwoPage)
  }
  Checkstudytwo() {
    this.navCtrl.push(CheckstudytwoPage)
  }
  SaveSicktwo() {
    this.navCtrl.push(SaveSicktwoPage)
  }
  Studentviewtwo() {
    this.navCtrl.push(StudentviewtwoPage)
  }

  clearst() {
    this.storage.clear();
    // this.storage.get('teacher_id').then((val) => {

    //   if(val == null){
    this.navCtrl.push(WelcomePage)
    //     console.log(val);
    //   }
    // })
  }

}//end class
