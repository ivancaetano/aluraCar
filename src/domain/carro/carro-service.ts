

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CarroService {

    constructor(private _http: Http) {}

    lista() {

        let api = `https://aluracar.herokuapp.com/`;
        return this._http
        .get(api)
        .map(res => res.json())
        .toPromise();
    }
}