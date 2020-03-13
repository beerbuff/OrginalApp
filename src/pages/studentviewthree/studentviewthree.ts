import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the StudentviewthreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentviewthree',
  templateUrl: 'studentviewthree.html',
})
export class StudentviewthreePage {
  studentArray = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadstudentData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentviewthreePage');
  }

  loadstudentData(){
    let url = "http://192.168.43.75/servicephp/getstudent3.php";
    this.http.get(url).subscribe((data: any) => {
      this.studentArray = data.student;
      console.log(this.studentArray);
    }, (error) => { console.log(error) });

  }

}// end class
