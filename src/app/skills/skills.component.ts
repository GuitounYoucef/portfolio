import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {NavbarEventsService} from "../navbar-events.service";




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
Desktopskills = [
  {
    technologieName: 'C language',
    years: 3,
    imageLink: 'assets/images/c-programming.png',
    comment:'Operating systeme(Linux): kernel, process management, memory management,video memory, driver',
    class:'none',
    color:'bluec'
  },
  {
    technologieName: 'Pascal language',
    years: 3,
    imageLink: 'assets/images/turbo-pascal.png',
    comment:'First programing laguage: Turbo Pascal 6.0 , arrays(1d,2d), pointers, lists, files, assembly language, mouse driver, graphics mode',
    class:'none',
    color:'bluepascal'
  } ,
   {
    technologieName: 'C++',
    years: 6,
    imageLink: 'assets/images/C++icon.png',
    comment:'Desktop application with Embarcadero Rad Studio: UI design and programing (DevExpress), Fire Base , Reporting(Fast-report VCL)',
    class:'none',
    color:'redrad'
  },
  {
    technologieName: 'Delphi',
    years: 6,
    imageLink: 'assets/images/delphi-icon.png',
    comment:'Desktop application with Embarcadero Rad Studio: UI design and programing (DevExpress), Fire Base , Reporting(Fast-report VCL)',
    class:'none',
    color:'redrad'
  },
  {
    technologieName: 'Elctron JS',
    years: 1,
    imageLink: 'assets/images/electronjs.png',
    comment:'Desktop applications',
    class:'none',
    color:'gray'
  },
];

  ///-----------------------------------------------------------------------------------------------------------
  Webskills = [
    {
      technologieName: 'Angular',
      years: 2,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'Front-End Web application , desktop application with ElectronJS',
      class:'fa-angular',
      color:'redrad'
    },
    {
      technologieName: 'JavaEE',
      years: 2,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'Fullstack web applications: JSP, JSTL, Servelet',
      class:'fa-java',
      color:'blue'
    },
    {
      technologieName: 'Java Spring-boot',
      years: 2,
      imageLink: 'assets/images/springboot.png',
      comment:'Back-End web applications: Rest API, Java Persistence API',
      class:'none',
      color:'green'
    }
    ,
    {
      technologieName: 'Ckeditor',
      years: 1,
      imageLink: 'assets/images/ckeditor.png',
      comment:'Front-End Web application, Create and Edit a Posts',
      class:'none',
      color:'green'
    },
    {
      technologieName: 'Java Srcipt',
      years: 4,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'Front-End Web application: JQuery, AJAX',
      class:'fa-js-square',
      color:'gold'
    },
    {
      technologieName: 'HTML',
      years: 4,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'Front-End Web application',
      class:'fa-html5',
      color:'orange'
    },
    {
      technologieName: 'CSS',
      years: 4,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'Front-End Web application',
      class:'fa-css3-alt',
      color:'gold'
    },
    {
      technologieName: 'Bootstrap',
      years: 3,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'Front-End Web application',
      class:'fa-bootstrap',
      color:'purple'
    },
    {
      technologieName: 'Material Design for Bootstrap',
      years: 1,
      imageLink: 'assets/images/mdb-angular.png',
      comment:'Front-End Web application',
      class:'none',
      color:'blue'
    },
    
 
  ];

  ///-----------------------------------------------------------------------------------------------------------
  Databaseskills = [
    {
      technologieName: 'MS SQL Server',
      years: 2,
      imageLink: 'assets/images/msSql.png',
      comment:'database of desktop applications',
      class:'none',
      color:'gray'
    },
    {
      technologieName: 'MySql',
      years: 2,
      imageLink: 'assets/images/mysql_PNG36.png',
      comment:'database of web applications',
      class:'none',
      color:'grayblue'
    },
  ]


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
