/**
 * @autor -  Joceano Alves de Borba - <alves.joceano@gmail.com>
 * Service: NotificacaoService, serviço de notificações.
 * data: 13/03/2018
 **/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../config';
import 'rxjs/Rx';

@Injectable()
export class NotificacaoService {

    constructor(private http: HttpClient) { }

    /**
     * Retorna as notificações.
    **/
    findAll(): Observable<any>  {
        return this.http
            .get(`${SERVER_URL}/notificacaoMob/`)
            .map(res => res);
    }
}