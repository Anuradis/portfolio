import { Component, OnInit, HostListener } from '@angular/core';
import { SlideInOutAnimation } from '../../assets/animations/animations';

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
  showMore: boolean = true;
  showMoreName: string = 'Show More';
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
    this.weatherAppContent = !this.weatherAppContent;
    this.animationStateWeatherApp = this.animationStateWeatherApp === 'out' ? 'in' : 'out';
    $event.preventDefault();
  }

  toggleContentFetchServer($event) {
    this.fetchServerContent = !this.fetchServerContent;
    this.animationStateFetchServer = this.animationStateFetchServer === 'out' ? 'in' : 'out';
    $event.preventDefault();
  }

  toggleContentToDo($event) {
    this.toDoContentContent = !this.toDoContentContent;
    this.animationStateToDo = this.animationStateToDo === 'out' ? 'in' : 'out';
    $event.preventDefault();
  }
  onShowMore() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.showMoreName = 'Show More';
    } else if (!this.showMore) {
      this.showMoreName = 'Show Less';
    }

    this.animationStateShowMore = this.animationStateShowMore === 'out' ? 'in' : 'out';
  }

}
