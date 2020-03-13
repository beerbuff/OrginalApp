import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the StudentviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentview',
  templateUrl: 'studentview.html',
})
export class StudentviewPage {
  studentArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadstudentData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentviewPage');
  }

  loadstudentData(){
    let url = "http://192.168.43.75/servicephp/getstudent.php";
    this.http.get(url).subscribe((data: any) => {
      this.studentArray = data.student;
      console.log(this.studentArray);
    }, (error) => { console.log(error) });

  }

}// end class
