import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';
import { ImageSearch } from '../providers/image-search';
import { PizzaService } from '../providers/pizza-service';
import { DetailPage } from '../pages/detail/detail';
import { PizzaSearchPipe } from '../pipes/pizza-search';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	LoginPage,
    RegisterPage,
    DetailPage,
    PizzaSearchPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	LoginPage,
    RegisterPage,
    DetailPage
  ],
  providers: [AuthService, ImageSearch, PizzaService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
