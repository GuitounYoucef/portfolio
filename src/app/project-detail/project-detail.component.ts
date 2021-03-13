
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
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
export class ProjectDetailComponent implements OnInit{
  id:string;
  x:number;
  s:string;

  constructor(private Skillsdata:DataService,private activaterouter:ActivatedRoute) {

  }
  projectDetail:any;
 

  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id'];
    this.openProject(Number(this.id)); 
  }
  openProject(id:number){
    this.projectDetail=this.Skillsdata.getPojectByName(id);
    console.log(this.projectDetail);
     
  }
  show(){

  }

}
