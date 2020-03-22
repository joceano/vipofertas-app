import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { NavParams } from 'ionic-angular';
import { OfertaService } from './oferta.service';
import { SERVER_URL } from '../../config';
import { OfertaDetalhePage } from '../oferta-detalhe/oferta-detalhe';

@Component({
	selector: 'page-oferta',
	templateUrl: 'oferta.html'
})
export class OfertaPage implements OnInit {
	
    public isOn       : boolean = false;
	private idParceiro: number;
	public ofertas    : any;
	public pesquisa   : string = '';
	public ServerUrl  : string = `${SERVER_URL}file/files/`;

	constructor(public navCtrl: NavController,
        private ofertaService: OfertaService,
		private navParams: NavParams,
		private loadingCtrl: LoadingController,
		private alertCtrl: AlertController) {
            this.idParceiro = navParams.get('idParceiro');
	}
	
	ionCancel() {
		this.isOn = !this.isOn;
		this.pesquisa = '';
	}
    
    ngOnInit() {
        this.carregar();
    }

	toggleDetails() {
		this.isOn = !this.isOn;
	}

	doRefresh(refresher) {		
		if (refresher != null) {
			setTimeout(() => {
				this.carregar();
				refresher.complete();
			},
			200);
		}
	}
	
	/**
     * Carrega todas as ofertas.
    **/
    carregar() {
        let loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();
        this.ofertaService.findByParceiro(this.idParceiro)
            .subscribe(res => {
                this.ofertas = res;
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

    carregarDetalheOferta(idOferta: number) {
        this.navCtrl.push(OfertaDetalhePage, {idOferta: idOferta});
    }
}