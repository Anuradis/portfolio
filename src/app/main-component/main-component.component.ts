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

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (Math.floor(window.scrollY) > 700) {
      this.windowTop = true;
      this.scrollPositionY = Math.floor(window.scrollY);
    } else if (Math.floor(window.scrollY) < 1000) {
      this.windowTop = false;
      this.scrollPositionY = Math.floor(window.scrollY);
      // console.log(`< 1000 ${window.scrollY}`);
    }
    // console.log(`< afterall ${window.scrollY}`);
}

onScroll(el: HTMLElement, $event) {
  if (this.scrollPositionY > 700) {
    window.scrollTo(0, 0);
    console.log(window.screenX, window.scrollY, window.screenTop);
    console.log(el + 'el');
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

}
