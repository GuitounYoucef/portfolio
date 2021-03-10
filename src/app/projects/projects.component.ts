import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {
  @Input() image1position: any;
  num = 10;
  desktpsprojects = [
    {
      Name: 'Stock management application',
      company:'material service - Municipality of Sidi Khaled - Biskra',
      period: '2018',
      Effort: '2 months with improvements to date',
      Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'Delphi', 'Fast Report VCL 5','DevExpress'],
 
      imageLink: 'assets/images/projects/stocke/stocke.JPG',
      description: 'Control and record all operations carried out on the stock of products such as invoicing, delivery, stock cards, using a barcode reader and a printer for tickets and barcodes'
    },
    {
      Name: 'Revision of the electoral list',
      company:'material service - Municipality of Sidi Khaled - Biskra',
      period: '2016',
      Effort: '6 months with improvements to date',
      Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'C++ Builder', 'Fast Report VCL 5','DevExpress'],
 
      imageLink: 'assets/images/projects/election/election.JPG',
      description: 'manage the list of electors (registration, transfer, expulsion) using the civil status database'
    },
    {
      Name: 'Digitalization of vehicle sales contract',
      company:'material service - Municipality of Sidi Khaled - Biskra',
      period: '2016',
      Effort: '3 months with improvements to date',
      Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'C++ Builder', 'Fast Report VCL 5','DevExpress'],
 
      imageLink: 'assets/images/projects/auto/auto.JPG',
      description: 'Digitize and manage (create, read, update, delete, print reports) vehicle sales contracts'
    },
    {
      Name: 'Expert system - civil status',
      company:'material service - Municipality of Sidi Khaled - Biskra',
      period: '2015',
      Effort: '6 months with improvements to date',
      Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'Delphi', 'Fast Report VCL 5','DevExpress'],
       imageLink: 'assets/images/projects/sexp/se.PNG',
      description: 'Implementation of an expert system (rule base + fact base, inference engine) which automatically translates civil status databases (birth, marriage, decree) from the Arabic language to the French language.'
    },            
  ];

  webprojects = [
    {
      Name: 'Fullstack Blog',
      company:'persenal',
      period: '2020',
      Effort: '1 months with improvements to date',
      Technological:['Mysql','Angular', 'Java Spring boot', 'Html','Css','Ckeditor5','Typescript','Bootstrap'],
      imageLink: 'assets/images/projects/blog/blog.JPG',
      description: 'fullstack bolg post with angular, ckeditor in front-end and spring boot api in back-end',
      link:'https://github.com/GuitounYoucef/AngularSrpingBootBlog'
      
    },
    {
      Name: 'This portfolio',
      company:'persenal',
      period: '2021',
      Effort: '15 days',
      Technological:['Angular', 'FireBase', 'Html','Css','Scss','Typescript','Bootstrap','MDB5','Animation'],
       imageLink: 'assets/images/projects/portfolio/portfolio.JPG',
      description: 'fullstack mini web application with angular in front-end and a litle back-end with firebase',
      link:'none'
    },
  ]


  w: number;
  imgpositionFixed = false;
  statusCollapse = 'collapse-active';
  constructor() {

  }
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription


  ngOnInit(): void {

    this.getimageposition();



  }


  visible: boolean = false;
  breakpoint: number = 768;
  onResize(event) {
    this.w = event.target.innerWidth;
    console.log('event: ', this.w);
    this.getimageposition();

  }
  setActiveClass() {
    if (this.statusCollapse == 'collapse-active')
      this.statusCollapse = 'collapse-nonactve';
    else
      this.statusCollapse = 'collapse-active';
  }

  getimageposition() {
    if ((this.w > 992) && (!this.imgpositionFixed)) {
      console.log("fixed");
      this.image1position = 'fixed';
      return "fixed";


    } else
      if ((this.w <= 992) && (this.imgpositionFixed)) {
        console.log("static");
        this.image1position = 'static';
        return "static";

      };
  }

}
