import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Pizza } from '../models/pizza.model';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the PizzaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PizzaService {

  constructor(public http: Http) {
  }

    getPizzas(): Observable<Pizza[]> {
          return this.http
            .get('assets/data.json')
            .delay(2000)
            .map((res: Response) => res.json());
        }

        getPizza(id): Observable<Pizza> {
          return this.http
            .get('assets/data.json')
            .map((res: Response) => res.json())
            .map((pizzas: Pizza[]) => {
              for (let pizza of pizzas) {
                if (pizza.id === id) {
                  return pizza;
                }
              }
            });
        }
}
