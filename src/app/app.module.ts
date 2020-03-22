import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OfertaPage } from '../pages/oferta/oferta';
import { NotificacaoPage } from '../pages/notificacao/notificacao';
import { PreferenciaPage } from '../pages/preferencia/preferencia';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OfertaService } from '../pages/oferta/oferta.service';
import { HttpClientModule } from '@angular/common/http';
import { ParceiroPage } from '../pages/parceiro/parceiro';
import { ParceiroService } from '../pages/parceiro/parceiro.service';
import { SearchPipe } from '../pipes/search/search';
import { OfertaDetalhePage } from '../pages/oferta-detalhe/oferta-detalhe';
import { OfertaDetalheService } from '../pages/oferta-detalhe/oferta-detalhe.service';
import { NotificacaoService } from '../pages/notificacao/notificacao.service';
import { NotificacaoDetalhePage } from '../pages/notificacao-detalhe/notificacao-detalhe';
import { NotificacaoDetalheService } from '../pages/notificacao-detalhe/notificacao-detalhe.service';
import { OneSignal } from '@ionic-native/onesignal';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    MyApp,
    OfertaPage,
    OfertaDetalhePage,
    NotificacaoPage,
    NotificacaoDetalhePage,
    PreferenciaPage,
    ParceiroPage,
    TabsControllerPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OfertaPage,
    OfertaDetalhePage,
    NotificacaoPage,
    NotificacaoDetalhePage,
    PreferenciaPage,
    ParceiroPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OfertaService,
    OfertaDetalheService,
    ParceiroService,
    NotificacaoService,
    NotificacaoDetalheService,
    OneSignal,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'pt' },
  ]
})
export class AppModule {}