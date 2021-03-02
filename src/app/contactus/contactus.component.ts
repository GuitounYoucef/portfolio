import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @Input() image1position:any;
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
  constructor() { 

  }
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
 
 
  ngOnInit(): void {

    setTimeout(() => {
      this.image1position = 'fixed';
   }, 1000);  



  }


  visible: boolean = false;
  breakpoint: number = 768;
  onResize(event) {
    this.w = event.target.innerWidth;
    console.log('event: ', this.w);

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
        return "static";

      };
  }

}
