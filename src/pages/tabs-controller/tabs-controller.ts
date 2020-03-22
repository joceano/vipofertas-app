import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificacaoPage } from '../notificacao/notificacao';
import { PreferenciaPage } from '../preferencia/preferencia';
import { ParceiroPage } from '../parceiro/parceiro';

@Component({
    selector: 'page-tabs-controller',
    templateUrl: 'tabs-controller.html'
})

export class TabsControllerPage {
    tab1Root: any = ParceiroPage;
    tab2Root: any = NotificacaoPage;
    tab3Root: any = PreferenciaPage;
    
    constructor(public navCtrl: NavController) {}

}