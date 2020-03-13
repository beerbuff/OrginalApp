import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the ActivityviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activityview',
  templateUrl: 'activityview.html',
})
export class ActivityviewPage {
  activityArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadactivityData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityviewPage');
  }
  
  loadactivityData(){
    let url = 'http://192.168.43.75/servicephp/getactivity.php/';
    this.http.get(url).subscribe((data: any) => {
      this.activityArray = data.activity;
      console.log(this.activityArray);
    }, (error) => { console.log(error) });

  }

}//end class
