import {Component, Input} from '@angular/core';
import {NavController, Refresher} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { ImageSearch } from '../../providers/image-search';
import { PizzaService } from '../../providers/pizza-service';
import { DetailPage } from '../detail/detail';
import { Pizza } from '../../models/pizza.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ImageSearch]
})
export class HomePage {

  username = '';
  email = '';
  @Input() search: string = "";
  pizzaSource: Observable<Pizza[]>;
  pizzas: Pizza[] = [];
  loading: boolean;
  slides:any[];
  mySlideOptions = {
    pager:true
  };

  constructor(private nav: NavController, private auth: AuthService, private searchProvider: ImageSearch, private pizzaService: PizzaService ) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

  doSearch() {
      console.log('searching for '+this.search);
      this.searchProvider.search(this.search).subscribe(data => {
        console.log(data);
        this.slides = data;
      });
   }

   ngOnInit() {
     this.loading = true;
     const subscription = this.pizzaService.getPizzas().subscribe(pizzas => {
       this.pizzas = pizzas;
       this.loading = false;
       subscription.unsubscribe();
     }, () => this.loading = false);
   }

   doRefresh(refresher: Refresher) {
     const subscription = this.pizzaService.getPizzas().subscribe(pizzas => {
       this.pizzas = pizzas;
       refresher.complete()
       subscription.unsubscribe();
     }, () => refresher.complete());
   }

      openPizza(id: number) {
         this.nav.push(DetailPage, {
           id: id
         });
       }

    /** openCart() {
       this.nav.push(CartComponent);
     }

     addToCart($event, pizza: Pizza) {
       $event.stopPropagation();

       this.cartService.addCartItem(pizza);
     }**/

  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}
