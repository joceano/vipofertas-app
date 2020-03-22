import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { OfertaDetalheService } from './oferta-detalhe.service';
import { SERVER_URL } from './../../config';

@Component({
	selector: 'page-oferta-detalhe',
	templateUrl: 'oferta-detalhe.html'
})

export class OfertaDetalhePage implements OnInit {

    private idOferta : number;
    public oferta    : any;
    public ServerUrl : string = `${SERVER_URL}file/files/`;

	constructor(private navParams: NavParams,
				private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private ofertaDetalheService: OfertaDetalheService) {
		this.idOferta = navParams.get('idOferta');
	}
    
    ngOnInit() {
		this.carregar();
	}

	/**
     * Carrega a oferta.
    **/
    carregar() {
        let loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();
        this.ofertaDetalheService.findOne(this.idOferta)
            .subscribe(res => {
                this.oferta = res;
                loader.dismiss()
            }, error => {
                console.log(error.message);
                loader.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Ops!',
                    subTitle: 'Não foi possível carregar as informações!',
                    buttons: ['OK']
                  });
                  alert.present();
        });
    }
}