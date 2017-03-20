import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})
export class WaitPage {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navCtrl.push(HomePage);
    }, 4000);
  }

}
