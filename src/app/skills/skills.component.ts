import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {NavbarEventsService} from "../navbar-events.service";
import { DataService } from '../services/data.service';




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class SkillsComponent implements OnInit{
 image1position='relative';
 panelOpenState = false;
  num = 10;
//----------------------------------------------------------------------------------------------------------



isImage(s:string){
  if (s=='none') {
    return false;
  } else {
    return true;
  }
}

 
  w: number;
  imgpositionFixed = false;
  statusCollapse = 'collapse-active';
  message:string;
  Desktopskills:any[];
  Webskills:any[];
  Databaseskills:any[];
  constructor(private Skillsdata:DataService) { 

  }

 
 
  ngOnInit(): void {
    this.Desktopskills=this.Skillsdata.getDesktpSkills();
    this.Webskills=this.Skillsdata.getWebSkills();
    this.Databaseskills=this.Skillsdata.getDatabaseSkills();
    this.image1position = 'fixed';
    //if (this.message =='static')
    
       // this.image1position = 'static';

 
  }
  fixedimage(){
   // this.image1position = 'fixed';
    console.log("enter");

  }
  staticiamge(){
    //this.image1position = 'static';

  }
  normalImg(){

   
  }


  visible: boolean = false;
  breakpoint: number = 768;
  onResize(event) {
    this.w = event.target.innerWidth;
    console.log('event: ', this.w);
    if ((this.w > 994) && (!this.imgpositionFixed)) {
      console.log("fixed");
      this.image1position = 'fixed';
      this.imgpositionFixed=true;



    } else
      if ((this.w <= 994) && (this.imgpositionFixed)) {
        console.log("static");
        this.image1position = 'static';
        this.imgpositionFixed=false;


      };  

  }
  setActiveClass() {
    if (this.statusCollapse == 'collapse-active')
      this.statusCollapse = 'collapse-nonactve';
    else
      this.statusCollapse = 'collapse-active';
  }

  getimageposition() {
    if ((this.w > 750) && (!this.imgpositionFixed)) {
      console.log("fixed");
      return "fixed";


    } else
      if ((this.w <= 750) && (this.imgpositionFixed)) {
        console.log("static");
        this.image1position = 'static';
        return "static";

      };
  }




}
