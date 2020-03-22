import { Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { OneSignal } from '@ionic-native/onesignal';
import { OfertaDetalhePage } from '../pages/oferta-detalhe/oferta-detalhe';
import { NotificacaoPage } from '../pages/notificacao/notificacao';
import { OfertaDetalheService } from '../pages/oferta-detalhe/oferta-detalhe.service';

@Component({
    templateUrl: 'app.html'
})

export class MyApp {
  
    @ViewChild(Nav) nav: Nav;
    rootPage:any = TabsControllerPage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private oneSignal: OneSignal,
                private ofertaDetalheService: OfertaDetalheService) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    ngOnInit() {
        this.configPushNotification();
    }

    configPushNotification() {
        this.oneSignal.startInit('3b3c07ef-a794-4729-b32d-4e10e3f22895', '711982635273');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.clickPushNotification();
        this.oneSignal.endInit();
    }

    clickPushNotification() {
        this.oneSignal.handleNotificationOpened().subscribe((data: any) => {
            let oferta_id: number;
            oferta_id = parseInt(JSON.stringify(data.notification.payload.additionalData.oferta_id));          

            if (oferta_id > 0) {
                /*
                Ao clicar na notificação, abrir o app diretamente na oferta que foi enviada pelo parceiro. 
                Caso a oferta tenha sido cancelada, somente abrir o app e permanecer na aba "Ofertas".
                */
                this.ofertaDetalheService.findOne(oferta_id).subscribe(res => {
                    if (res.id) {
                        this.nav.push(OfertaDetalhePage, {idOferta: oferta_id});
                    }
                }, error => {
                    //this.nav.push(NotificacaoPage);
                });
                
            } else {
                this.nav.push(NotificacaoPage);
            }
        });
    }
}