import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'center-about',
  templateUrl: 'center.html'
})
export class CenterPage {

  rightLogin: string = "admin";
  rightPassword: string = "1";

  data = {
    login:'',
    password:''
  };

  mexicanBorder: boolean = false;
  centerPage: boolean = false;
  loginPage: boolean = true;

  centers = [
    {
      name: 'Сервисный центр, Преображенская 27',
      code: '000000005'
    },
    {
      name: 'СЦ Днепропетровск',
      code: '000000021'
    },
    {
      name: 'СЦ Заболотного, Одесса',
      code: '000000029'
    },
    {
      name: 'СЦ Киев',
      code: '000000022'
    },
    {
      name: 'СЦ Николаев',
      code: '000000028'
    },
    {
      name: 'СЦ Пантелеймоновская 21, Одесса',
      code: '000000032'
    },
    {
      name: 'СЦ Харьков',
      code: '000000026'
    },

  ];

  constructor(public navCtrl: NavController) {
  }

  public choose(center) {
    localStorage.setItem('center', center.code);
    this.navCtrl.push(HomePage);
  }

  ngOnInit() {
    localStorage.clear();
  }

  loginIn(value) {
    if (value.login == this.rightLogin && value.password == this.rightPassword) {
      localStorage.setItem('user', value.login);
      this.centerPage = true;
      this.loginPage = false;
    }
    this.mexicanBorder = true;
  }

  ngAfterViewInit() {
    //this.rd.invokeElementMethod(this.el.nativeElement, 'focus');
  }

}
