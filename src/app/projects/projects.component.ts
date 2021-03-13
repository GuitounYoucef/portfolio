import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

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
  Projects:any[];
  w: number;
  imgpositionFixed = false;
  statusCollapse = 'collapse-active';
  projectDetail:any;
  constructor(private Skillsdata:DataService,private router:Router) {

  }
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription


  ngOnInit(): void {
    this.Projects=this.Skillsdata.getProjects();
    



  }
openProject(id:number){
 // this.projectDetail=this.Skillsdata.getPojectByName(id);
  //console.log(this.projectDetail);
  this.router.navigate(['ProjectDetail',id]);

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
