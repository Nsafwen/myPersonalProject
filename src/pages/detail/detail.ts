import {Component} from '@angular/core';

import {NavParams} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

import { PizzaService } from '../../providers/pizza-service';
import {Pizza} from '../../models/pizza.model';

@Component({
  templateUrl: 'detail.html'
})
export class DetailPage {
  pizza: Pizza;

  constructor(
    private navParams: NavParams,
    private pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    this.pizzaService
      .getPizza(this.navParams.get('id'))
      .toPromise()
      .then(pizza => this.pizza = pizza);
  }
}