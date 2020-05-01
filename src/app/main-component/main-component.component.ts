import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  animations: [trigger('lightSpeedIn', [transition('* => *', useAnimation(fadeIn, {params: { Opacity: 0,
    timing: 1.2,
  }}
    ))], ),
     trigger('rubberBand', [transition('* => *', useAnimation(bounceInDown, {params: { Opacity: 0, timing: 3}}
      ))], )
],
})


export class MainComponentComponent implements OnInit {

  rubberBand: Animation;
  lightSpeedIn: Animation;

  receivedTemplateChildVar: ElementRef;
  windowTop = false;
  scrollOn = true;
  scrollPositionY = 0;

  @HostListener('window:scroll', []) onScrollEvent(): void {
    if (Math.floor(window.scrollY) > 700) {
      this.windowTop = true;
      this.scrollPositionY = Math.floor(window.scrollY);
    } else if (Math.floor(window.scrollY) < 1000) {
      this.windowTop = false;
      this.scrollPositionY = Math.floor(window.scrollY);
    }
}

  constructor() { }

  ngOnInit() {}

  onScroll(el: ElementRef): void {
    if (this.scrollPositionY > 700) {
      window.scrollTo(0, 0);
      } else if (this.scrollPositionY <= 700) {
        el.nativeElement.scrollIntoView();
       }
  }

  receiveElement($event): void {
  this.receivedTemplateChildVar = $event;
  }
}
