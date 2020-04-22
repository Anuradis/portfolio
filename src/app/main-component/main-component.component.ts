import { Component, OnInit, HostListener } from '@angular/core';
import { SlideInOutAnimation } from '../../assets/animations/animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  animations: [trigger('lightSpeedIn', [transition('* => *', useAnimation(fadeIn, {params: { Opacity: 0,
    timing: 1.2,
  }}
    ))], ), trigger('rubberBand', [transition('* => *', useAnimation(bounceInDown, {params: { Opacity: 0, timing: 3}}
      ))], )
    , SlideInOutAnimation
],
})


export class MainComponentComponent implements OnInit {

  rubberBand: any;
  lightSpeedIn: any;

  windowTop = false;
  scrollOn = true;
  scrollPositionY = 0;

  weatherAppContent = false;
  ampContent = false;
  toDoContentContent = false;
  fetchServerContent = false;
  playballContent = false;
  webDesignContent = false;

  animationStateWeatherApp = 'out';
  animationStateFetchServer = 'out';
  animationStateToDo = 'out';
  animationStateShowMore = 'out';
  animationStateAmp = 'out';
  animationStatePlayball = 'out';
  animationStateWebDesign = 'out';

  showMore = true;
  showMoreName = 'See More';

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (Math.floor(window.scrollY) > 700) {
      this.windowTop = true;
      this.scrollPositionY = Math.floor(window.scrollY);
    } else if (Math.floor(window.scrollY) < 1000) {
      this.windowTop = false;
      this.scrollPositionY = Math.floor(window.scrollY);
    }
}


  constructor() { }

  ngOnInit() {
  }

  onScroll(el: Element) {
    if (this.scrollPositionY > 700) {
      window.scrollTo(0, 0);
      } else if (this.scrollPositionY <= 700) {
        el.scrollIntoView();
       }
  }

  onToggleContentWeatherApp($event, target: Element): void {
      this.animationStateWeatherApp = this.animationStateWeatherApp === 'out' ? 'in' : 'out';
      this.weatherAppContent = !this.weatherAppContent;
      $event.preventDefault();
      target.scrollIntoView();
  }

  onToggleContentAmp($event, el: Element) {
    this.animationStateAmp = this.animationStateAmp === 'out' ? 'in' : 'out';
    this.ampContent = !this.ampContent;
    $event.preventDefault();
    el.scrollIntoView();
  }

  onToggleContentToDo($event, el: Element) {
    this.animationStateToDo = this.animationStateToDo === 'out' ? 'in' : 'out';
    this.toDoContentContent = !this.toDoContentContent;
    $event.preventDefault();
    el.scrollIntoView();
  }

  onToggleContentFetchServer($event, el: Element) {
    this.animationStateFetchServer = this.animationStateFetchServer === 'out' ? 'in' : 'out';
    this.fetchServerContent = !this.fetchServerContent;
    $event.preventDefault();
    el.scrollIntoView();
  }

  onToggleContentPlayball($event, el: Element) {
    this.animationStatePlayball = this.animationStatePlayball === 'out' ? 'in' : 'out';
    this.playballContent = !this.playballContent;
    $event.preventDefault();
    el.scrollIntoView();
  }

  onToggleContentWebDesign($event, el: Element) {
    this.animationStateWebDesign = this.animationStateWebDesign === 'out' ? 'in' : 'out';
    this.webDesignContent = !this.webDesignContent;
    $event.preventDefault();
    el.scrollIntoView();
  }



  onShowMore($event) {
    this.animationStateShowMore = this.animationStateShowMore === 'out' ? 'in' : 'out';
    if (this.animationStateShowMore === 'out') {
        this.showMoreName = 'See More';
       } else {
      this.showMoreName = 'See Less';
      $event.preventDefault();
    }
}
}
