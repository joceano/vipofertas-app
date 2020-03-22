/**
 * @autor -  Joceano Alves de Borba - <alves.joceano@gmail.com>
 * Service: NotificacaoDetalheService, serviço do detalhe da Notificacao.
 * data: 13/03/2018
 **/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../config';
import 'rxjs/Rx';

@Injectable()
export class NotificacaoDetalheService {

    constructor(private http: HttpClient) {}

    /**
     * Retorna a notificação.
    **/
    findOne(id: number): Observable<any>  {
        return this.http
            .get(`${SERVER_URL}/notificacaoMob/findOne/`+id)
            .map(res => res);
    }
}