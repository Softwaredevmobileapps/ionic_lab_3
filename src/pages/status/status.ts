import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
myStatus: string;
  constructor(private storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  saveStatus(){
    console.log(this.myStatus);
    this.storage.set("Status", this.myStatus);
    this.navCtrl.pop();

  }

  ionViewWillEnter(){
    this.storage.get("Status")
    .then((data) => {
      this.myStatus = data;
    })
    .catch((err) => {
      console.log(err);
    })

  }

}
