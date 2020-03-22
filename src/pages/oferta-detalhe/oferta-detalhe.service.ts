/**
 * @autor -  Joceano Alves de Borba - <alves.joceano@gmail.com>
 * Service: OfertaDetalheService, serviço do detalhe da Oferta.
 * data: 25/02/2018
 **/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../config';
import 'rxjs/Rx';

@Injectable()
export class OfertaDetalheService {

    constructor(private http: HttpClient) {}

    /**
     * Retorna a oferta.
    **/
    findOne(id: number): Observable<any>  {
        return this.http
            .get(`${SERVER_URL}/ofertaMob/findOne/`+id)
            .map(res => res);
    }
}