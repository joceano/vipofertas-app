import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { NotificacaoDetalheService } from './notificacao-detalhe.service';
import { SERVER_URL } from './../../config';

@Component({
	selector: 'page-notificacao-detalhe',
	templateUrl: 'notificacao-detalhe.html'
})

export class NotificacaoDetalhePage implements OnInit {

    private idNotificacao : number;
    public notificacao    : any;
    public ServerUrl      : string = `${SERVER_URL}file/files/`;

	constructor(private navParams: NavParams,
				private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private notificacaoDetalheService: NotificacaoDetalheService) {
		this.idNotificacao = navParams.get('idNotificacao');
	}
    
    ngOnInit() {
		this.carregar();
	}

	/**
     * Carrega a notificacao.
    **/
    carregar() {
        let loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();
        this.notificacaoDetalheService.findOne(this.idNotificacao)
            .subscribe(res => {
                this.notificacao = res;
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
}