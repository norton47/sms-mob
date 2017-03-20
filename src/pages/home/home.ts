import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {SendRequestService} from "../../app/services/send-request";
import {ContactPage} from "../contact/contact";
import {QuardService} from "../../app/services/guard";
import {WaitPage} from "../wait/wait";
import {CenterPage} from "../center/center";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl:NavController,
                private sendData:SendRequestService,
                private guard: QuardService)
    {
        if (this.guard.guardPages()){
            console.log(this.guard.guardPages());
            this.navCtrl.push(CenterPage);
        }
    }

    public inQueue() {
        this.sendData.request().subscribe();
        this.navCtrl.push(WaitPage);
    }

    public inQueueWithSMS() {
        this.navCtrl.push(ContactPage);
    }

    public getPlaceInQueue() {
        // Запрос
        this.sendData.request().subscribe();
    }

}
