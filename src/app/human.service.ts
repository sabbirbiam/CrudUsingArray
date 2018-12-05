import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { IHuman } from './model.human';

@Injectable()
export class HumanService {
    private humantUrl = 'api/humans/humans.json';
    constructor(private http: HttpClient) {
        http.get(this.humantUrl)
        .subscribe(response => {
            console.log('fjghjfhgjh', response);
        });
    }

    getHumans(): Observable <IHuman[]> {
        // debugger;
        // console.log('sdj', this.http.get<IHuman[]>(this.humantUrl));
        return this.http.get<IHuman[]>(this.humantUrl); 
    }
}
