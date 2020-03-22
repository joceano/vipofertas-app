import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SERVER_URL } from './../../config';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { NotificacaoService } from './notificacao.service';
import { NotificacaoDetalhePage } from '../notificacao-detalhe/notificacao-detalhe';
import { OfertaDetalhePage } from '../oferta-detalhe/oferta-detalhe';

@Component({
    selector: 'page-notificacao',
    templateUrl: 'notificacao.html'
})

export class NotificacaoPage {

    public isOn         : boolean = false;
    public notificacoes : any;
    public pesquisa     : string = '';
    public ServerUrl    : string = `${SERVER_URL}file/files/`;

	constructor(public navCtrl: NavController,
        private notificacaoService: NotificacaoService,
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
     * Carrega todas as notificações.
    **/
    carregar() {
        let loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();
        this.notificacaoService.findAll()
            .subscribe(res => {
                this.notificacoes = res;
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
            }
        );
    }

    carregarDetalheNotificacao(notificacao: any) {
        if (notificacao.oferta) {
            this.navCtrl.push(OfertaDetalhePage, {idOferta: notificacao.oferta.id});
        } else {
            this.navCtrl.push(NotificacaoDetalhePage, {idNotificacao: notificacao.id});
        }        
    } 
}