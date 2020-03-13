import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HttpClient } from '@angular/common/http';
declare var require: any;



@IonicPage()
@Component({
  selector: 'page-remindthree',
  templateUrl: 'remindthree.html',
})
export class RemindthreePage {
  term = '';
  teacher = '';
  student = [];
  qrId = [];
  card_id = [];
  studentpa = '';

  dateFormat = require('dateformat');
  date = this.dateFormat(new Date(), "yyyy-mm-dd");
  time = this.dateFormat(new Date(), "HH:MM:ss");

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public http: HttpClient) {
    this.loadstudentcheckData(this.card_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemindthreePage');
  }


  loadstudentcheckData(card_id) {
    let url = 'http://192.168.43.75/servicephp/getremind3.php?card_id=' + card_id;

    this.http.get(url).subscribe((data: any) => {
      this.student = data.student;
      this.term = data.term;
      console.log(this.student);
    }, (error) => { console.log(error) });

  }

  show(e) {
    // console.log(e)
    this.student.forEach((element, index) => {
      e.forEach(ele => {
        if (ele == element.card_id) {
          this.qrId.push(element.qrId);
          this.card_id.push(element.card_id);
        }
      });
    });
    console.log(this.qrId)
    console.log(this.card_id)
  }

  postJsonData(term_id, date, time) {
    let jsonData = { card_id: this.card_id, term_id: term_id, date: date, time: time, qrId: this.qrId }; //สร้าง obj
    console.log(jsonData);
    let url = 'http://192.168.43.75/servicephp/saverabsongremind.php?date=' + date + '&time=' + time;
    // let url = 'http://192.168.1.4/servicephp/saverabsongremind.php';
    this.http.post(url, jsonData).subscribe((data: any) => {
      console.log(url);
      alert("บันทึกเรียบร้อยแล้ว");
      console.log(data);
    }
    );
  }

}//end class
