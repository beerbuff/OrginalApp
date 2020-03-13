import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuparentPage } from '../menuparent/menuparent';

/**
 * Generated class for the TestloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testlogin',
  templateUrl: 'testlogin.html',
})
export class TestloginPage {
  username: string;
  password: string;

  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: HttpClient) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestloginPage');
  }

  Testlog(username, password) 
  {
    let url = 'http://192.168.43.75/servicephp/getparent.php?username=' + username + '&password=' + password;
    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      console.log(data);
      this.storage.set('card_id', data.card_id);
      this.storage.get('card_id').then((val) => {
        console.log('card_id is', val);
      })

      this.storage.set('qrId', data.qrId);
      this.storage.get('qrId').then((val) => {
        console.log('qrId is', val);
      })


      console.log(data.qrId);
      if (data.qrId == null) {
        alert("ไม่มี Username นี้ในระบบ");

      } else {
        alert(username);
        this.navCtrl.push(MenuparentPage);
      }

      console.log(data);


    });
  }

}
