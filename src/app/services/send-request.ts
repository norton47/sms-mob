import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SendRequestService {

    url: string = `https://my.citrus.ua/papi/service_center/zayavka`;

    //http:any;

    constructor(private http: Http){
        //this.http = http;
    }

    request(name: string = '',phone: string = ''){
        let center = localStorage.getItem('center');
        let sendUrl = this.url + '?name=' + name + '&phone=' + phone + '&center=' + center;
        return this.http.get(sendUrl)
            .map(res => res.json());
    }
}