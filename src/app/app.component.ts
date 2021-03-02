import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger,state,style, animate, transition, group, query, animateChild} from '@angular/animations';
import {NavbarEventsService} from "../app/navbar-events.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('1000ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('1000ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),

    ]),

  ]
})
export class AppComponent {
  master='static';
  title = 'portfolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  constructor(private navbar:NavbarEventsService){

  }
 

  
}
