import { Component, OnInit, HostListener } from '@angular/core';
import { SlideInOutAnimation } from '../../assets/animations/animations';
import { clearLine } from 'readline';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  animations: [SlideInOutAnimation]
})


export class MainComponentComponent implements OnInit {

  weatherAppContent = false;
  fetchServerContent = false;
  toDoContentContent = false;
  animationStateWeatherApp = 'out';
  animationStateFetchServer = 'out';
  animationStateToDo = 'out';
  windowTop = true;
  scrollOn = true;
  scrollPositionY = 0;
  showMore = true;
  showMoreName = 'Show More';
  animationStateShowMore = 'out';

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (Math.floor(window.scrollY) > 700) {
      this.windowTop = true;
      this.scrollPositionY = Math.floor(window.scrollY);
    } else if (Math.floor(window.scrollY) < 1000) {
      this.windowTop = false;
      this.scrollPositionY = Math.floor(window.scrollY);
    }
}

onScroll(el: HTMLElement) {
  if (this.scrollPositionY > 700) {
    window.scrollTo(0, 0);
    } else if (this.scrollPositionY <= 700) {
      el.scrollIntoView();
     }
}
  constructor() { }

  ngOnInit() {
  }

  toggleContentWeatherApp($event): void {
      this.animationStateWeatherApp = this.animationStateWeatherApp === 'out' ? 'in' : 'out';
      this.weatherAppContent = !this.weatherAppContent;
      $event.preventDefault();
  }

  toggleContentFetchServer($event) {

    this.animationStateFetchServer = this.animationStateFetchServer === 'out' ? 'in' : 'out';
    this.fetchServerContent = !this.fetchServerContent;
    $event.preventDefault();
  }

  toggleContentToDo($event) {
    this.animationStateToDo = this.animationStateToDo === 'out' ? 'in' : 'out';
    this.toDoContentContent = !this.toDoContentContent;
    $event.preventDefault();
  }
  onShowMore(el: HTMLElement, $event) {
      if (this.animationStateShowMore) {
        this.showMoreName = 'Show More';
        el.scrollIntoView();
       } else if (!this.animationStateShowMore) {
      this.showMoreName = 'Show Less';
      $event.preventDefault();
    }
      this.animationStateShowMore = this.animationStateShowMore === 'out' ? 'in' : 'out';
}
}
