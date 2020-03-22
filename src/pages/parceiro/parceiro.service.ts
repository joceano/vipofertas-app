/**
 * @autor -  Joceano Alves de Borba - <alves.joceano@gmail.com>
 * Service: ParceiroService, serviço de parceiros.
 * data: 26/02/2018
 **/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../config';
import 'rxjs/Rx';

@Injectable()
export class ParceiroService {

    private _PatoBranco: number = 1;

    constructor(private http: HttpClient) { }

    /**
     * Retorna os parceiros da cidade.
    **/
    findAll(): Observable<any>  {
        return this.http
            .get(`${SERVER_URL}/parceiroMob/`+this._PatoBranco)
            .map(res => res);
    }
}