import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { MenuteachertwoPage } from '../menuteachertwo/menuteachertwo';
import { SMS } from '@ionic-native/sms';
declare var require: any;


/**
 * Generated class for the SaveSicktwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-sicktwo',
  templateUrl: 'save-sicktwo.html',
})
export class SaveSicktwoPage {
  student_id = [];
  term_id: any;
  sick_description: any;
  studentArray = [];
  termArrays = [];
  student_tel = [];

  dateFormat = require('dateformat');
  sick_date = this.dateFormat(new Date(), "yyyy-mm-dd");

  teacher_id = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private storage: Storage, private smsVar: SMS) {
    this.getstudent();
    this.getterm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveSicktwoPage');
  }
  
  getstudent() {
    this.storage.get('teacher_id').then((val) => {
      console.log("teacher_id is", val);
      let url = "http://192.168.43.75/servicephp/testsick2.php";
      this.http.get(url).subscribe((data: any) => {
        this.studentArray = data.student;
        console.log(data);
      });
    })

  }


  getterm() {
    let url = "http://192.168.43.75/servicephp/gettm.php?"
    this.http.get(url).subscribe((data: any) => {
      this.termArrays = data.term;
      console.log(data);
    }, (error) => { console.log(error) });

  }

  show(e) {
    // console.log(e)
    this.studentArray.forEach((element, index) => {
      e.forEach(ele => {
        if (ele == element.student_id) {
          this.student_tel.push(element.student_tel);
          this.student_id.push(element.student_id);
        }
      });
    });
    console.log(this.student_tel)
    console.log(this.student_id)
  }

  postJson(term_id, sick_description) {
    this.storage.get('teacher_id').then((val) => {
      console.log("teacher_id is", val);
      let jsonData = { student_id: this.student_id, sick_date: this.sick_date, term_id: term_id, sick_description: sick_description, teacher_id: val }; //สร้าง obj
      console.log(jsonData);
      let url = 'http://192.168.43.75/servicephp/serviceyodnam.php'; //ให้ไป post ที่  url
      this.http.post(url, jsonData).subscribe((data: any) => {
        // console.log(jsonData);
        alert("บันทึกเรียบร้อยแล้วกรุณาส่งข้อความ");
        this.navCtrl.push(MenuteachertwoPage)
        console.log(data);
      });

      //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
      //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
    })
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // Opens Default sms app
        //intent: '' // Sends sms without opening default sms app
      }
    }
    this.smsVar.send(this.student_tel, 'บุตรหลานของท่านป่วยกรุณามารับกลับบ้านด้วย', options)
      .then(() => {

      }, () => {

      });

  }
  
}//end class
