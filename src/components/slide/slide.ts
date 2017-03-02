import { Component  } from '@angular/core';

/*
  Generated class for the Slide directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Component({
  selector: 'slide',
  template: `<ion-slide> <h2>Slide {{this.option}}</h2> </ion-slide>`
})

export class SlideComponent {

  option  = "1";

  constructor() {
    console.log('Hello Slide Component');
  }

  ngOnInit() {
  }

}
