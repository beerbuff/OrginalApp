import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { MenuteacherPage } from '../menuteacher/menuteacher';
import { MenuteachertwoPage } from '../menuteachertwo/menuteachertwo';
import { MenuteacherthreePage } from '../menuteacherthree/menuteacherthree';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;

  data: Observable<any>;


  loginResult: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  Testlog(username, password) {
    
     let url = 'http://192.168.43.75/servicephp/getteacher.php?username=' + username + '&password=' + password;
   
 
    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      this.storage.set('teacher_id', data.teacher_id);
      this.storage.get('teacher_id').then((val) => {
        console.log('teacher_id is', val);
      })

      console.log(data.teacher_id);
      if(data.teacher_id == null){
        alert("ไม่มี Username นี้ในระบบ");

      }else if(data.grade == '1'){
        alert(data.grade);
        this.navCtrl.push(MenuteacherPage);

      }else if(data.grade == '2'){
        alert(data.grade);
        this.navCtrl.push(MenuteachertwoPage);

      }else if(data.grade == '3'){
        alert(data.grade);
        this.navCtrl.push(MenuteacherthreePage);
        
      }else{
        
        this.loginResult = "Faild";
      }



    });
  }

}// end class
