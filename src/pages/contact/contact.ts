import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SendRequestService} from "../../app/services/send-request";
import {QuardService} from "../../app/services/guard";
import {WaitPage} from "../wait/wait";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public phoneNumberMask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  data = {
    name:'',
    phone:''
  };

  constructor(public navCtrl: NavController, private sendData: SendRequestService, private guard: QuardService) {
    this.guard.guardPages();
  }

  logForm(value){
    this.sendData.request(value.name, value.phoneNumber).subscribe();
    this.navCtrl.push(WaitPage);
  }

}
