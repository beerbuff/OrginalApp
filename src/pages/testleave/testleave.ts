import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';




/**
 * Generated class for the TestleavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testleave',
  templateUrl: 'testleave.html',
})
export class TestleavePage {
  studentArrays=[];
  teacherArrays=[];
  termArrays=[];
  student_id=[];
  student_name=[];
  teacher_number=[];



  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, private storage: Storage,private smsVar: SMS) {
  this.getstudent();
  this.getterm();
  this.getteacher();
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestleavePage');
  }

  getstudent() {
    this.storage.get('qrId').then((val) => {
      // console.log(val);
      let url = "http://192.168.43.75/servicephp/getst.php?qrId=" + val;
     
      this.http.get(url).subscribe((data: any) => {
        this.studentArrays = data.student;
        console.log(this.student_name);
        console.log(data);
      }, (error) => { console.log(error) });
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
    this.studentArrays.forEach((element, index) => {
      e.forEach(ele => {
        if (ele == element.student_id) {
          this.student_name.push(element.student_name);
          this.student_id.push(element.student_id);
        }
      });
    });
    console.log(this.student_name )
    console.log(this.student_id )
  }

  
  getteacher() {
    let url = "http://192.168.43.75/servicephp/getphone.php";
 this.http.get(url).subscribe((data: any) => {
   this.teacherArrays = data.teacher;
 }, (error) => { console.log(error) });
}

showte(te){
 this.teacherArrays.forEach(element =>   {
  if(te == element.teacher_number){
    this.teacher_number.push(element.teacher_number);
  }
});
  console.log(this.teacher_number);
}

  postJson(leave_description, leave_startdate, leave_enddate, days, term_id) 
  {
    this.storage.get('qrId').then((val) => {
      console.log("teacher_id is", val);
      let jsonData = { student_id: this.student_id, leave_description: leave_description, leave_startdate: leave_startdate, leave_enddate: leave_enddate, days: days, term_id: term_id, qrId: val }; //สร้าง obj
      console.log(jsonData);
      let url = 'http://192.168.43.75/servicephp/saveleavesick.php'; //ให้ไป post ที่  url
      // let url = 'http://192.168.1.72/servicephp/saveleavesick.php'; //ให้ไป post ที่  url
      this.http.post(url, jsonData).subscribe((data: any) => {
        // console.log(jsonData);

        var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send(this.teacher_number, this.student_name+'ลาป่วย',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });


        alert("บันทึกเรียบร้อยแล้ว");
        this.navCtrl.push(TestleavePage)
        console.log(jsonData);
      });
      //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
      //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
    })

  }


}//end class
