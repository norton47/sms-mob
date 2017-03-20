import {Injectable}  from '@angular/core';

@Injectable()
export class QuardService {

    constructor() {
    }

    guardPages() {

        let center = localStorage.getItem('center');
        let user = localStorage.getItem('user');

        if (!user || !center) {
            return true;
        }
        return false;
    }
}