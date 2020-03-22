/**
 * @autor -  Joceano Alves de Borba - <alves.joceano@gmail.com>
 * Service: OfertaService, serviço de ofertas.
 * data: 25/02/2018
 **/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../config';
import 'rxjs/Rx';

@Injectable()
export class OfertaService {

    constructor(private http: HttpClient) { }

    /**
     * Retorna as ofertas.
    **/
    findByParceiro(idParceiro: number): Observable<any>  {
        return this.http
            .get(`${SERVER_URL}/ofertaMob/`+idParceiro)
            .map(res => res);
    }
}