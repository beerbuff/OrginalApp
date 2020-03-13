import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the BmiviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmiview',
  templateUrl: 'bmiview.html',
})
export class BmiviewPage {
  rowsArray=[];
  rowsStudent=[];
  qrId='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,private storage: Storage) {
    this.loadbmiData();
    this.loadstudentData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiviewPage');
  }

  loadbmiData(){
    this.storage.get('qrId').then((val) => {
      // console.log(val);
      let url = "http://192.168.43.75/servicephp/getbmi.php?qrId="+val;
      this.http.get(url).subscribe((data: any) => {
        this.rowsArray = data.bmi;
      
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }


  loadstudentData(){
    this.storage.get('qrId').then((val) => {
      // console.log(val);
      let url = "http://192.168.43.75/servicephp/getbmi.php?qrId="+val;
      this.http.get(url).subscribe((data: any) => {
        this.rowsStudent = data.student;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

}//end class
