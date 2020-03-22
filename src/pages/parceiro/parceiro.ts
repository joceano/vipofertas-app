/**
 * @autor -  Joceano Alves de Borba - <alves.joceano@gmail.com>
 * Página: ParceiroPage, página de parceiros.
 * data: 26/02/2018
 **/
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParceiroService } from './parceiro.service';
import { LoadingController, AlertController  } from 'ionic-angular';
import { SERVER_URL } from '../../config';
import { OfertaPage } from '../oferta/oferta';

@Component({
	selector: 'page-parceiro',
	templateUrl: 'parceiro.html'
})

export class ParceiroPage implements OnInit {

    public isOn      : boolean = false;
    public parceiros : any;
    public pesquisa  : string = '';
    public ServerUrl : string = `${SERVER_URL}file/files/`;

	constructor(public navCtrl: NavController,
        private parceiroService: ParceiroService,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController) {
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
     * Carrega todos os parceiros.
    **/
    carregar() {
        let loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();
        this.parceiroService.findAll()
            .subscribe(res => {
                this.parceiros = res;
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

    carregarOfertas(idParceiro: number) {
        this.navCtrl.push(OfertaPage, {idParceiro: idParceiro});
    }
}