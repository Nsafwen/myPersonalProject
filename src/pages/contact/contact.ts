import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private nav: NavController, private auth: AuthService) {

  }

  public logout() {
    this.auth.logout().subscribe(succ => {
       this.nav.setRoot(LoginPage)
    });
  }

}
