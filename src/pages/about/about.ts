import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private nav: NavController, private auth: AuthService) {

  }

  public logout() {
      this.auth.logout().subscribe(succ => {
          this.nav.setRoot(LoginPage)
      });
  }

}
