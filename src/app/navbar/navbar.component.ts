import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import {NavbarEventsService} from "../navbar-events.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message: string;

  

  constructor(private navbar:NavbarEventsService){

  }
  sendMessage(){
    console.log('navbar event');
   this.navbar.sendEvent('static');
  }


  ngOnInit(): void {
  }

}
