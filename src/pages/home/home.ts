import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StatusPage} from '../status/status';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
Status:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  
}

  openStatusPage(){
    this.navCtrl.push(StatusPage);
  }

  ionViewWillEnter(){
    this.storage.get("Status")
    .then((data) => {
      this.Status = data;
    })
    .catch((err) => {
      console.log(err);
    })

  }

}
