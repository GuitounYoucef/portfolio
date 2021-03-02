import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {NavbarEventsService} from "../navbar-events.service";




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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
  skills = [
    {
      technologieName: 'Pascal programming language (Advanced)',
      level: 8,
      imageLink: 'assets/images/turbo-pascal.png'
    },
    {
      technologieName: 'C programming language (Advanced)',
      level: 9,
      imageLink: 'assets/images/c language.png'
    },
    {
      technologieName: 'C++ programming language (Advanced)',
      level: 7,
      imageLink: 'assets/images/C++icon.png'
    },
    {
      technologieName: 'Pascal programming language (Advanced)',
      level: 8,
      imageLink: 'assets/images/turbo-pascal.png'
    },
    {
      technologieName: 'C programming language (Advanced)',
      level: 9,
      imageLink: 'assets/images/c language.png'
    },
    {
      technologieName: 'C++ programming language (Advanced)',
      level: 7,
      imageLink: 'assets/images/C++icon.png'
    },
  ];

 
  w: number;
  imgpositionFixed = false;
  statusCollapse = 'collapse-active';
  message:string;
 
  constructor(private router: Router,private navbar:NavbarEventsService) { 

  }

 
 
  ngOnInit(): void {

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
