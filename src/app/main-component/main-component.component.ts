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

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (Math.floor(window.scrollY) > 700) {
      this.windowTop = true;
      return Math.floor(window.scrollY);
      console.log(`HostListener > 700: result ${window.scrollY}`);
    } else if (Math.floor(window.scrollY) < 1000) {
      this.windowTop = false;
      return Math.floor(window.scrollY);
      // console.log(`< 1000 ${window.scrollY}`);
    }
    // console.log(`< afterall ${window.scrollY}`);

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

  onScroll(el: HTMLElement, $event) {
    this.onScrollEvent($event);
    console.log(`window.screenY before if${window.screenY}`);
    console.log(`Math.floor${(Math.floor(window.screenY) > 700)}`);
    if (Math.floor(window.screenY) > 700) {
      console.log(`window.screenY inside if${window.screenY}`);
      console.log(`onScroll method > 700 ${window.scrollY}`);
      window.scrollTo(0, 0);
      console.log(window.screenX, window.scrollY, window.screenTop);
      console.log(el + 'el');
      } else if ((Math.floor(window.screenY) <= 700)) {
        // console.log(`onScroll method <= 700 ${window.scrollY}`);
        // console.log(`before el.scrollIntoView${el.scrollIntoView()}`);
        el.scrollIntoView();
        // console.log(`onScroll method <= 700 ${window.scrollY}`);
        // console.log(`after el.scrollIntoView${el.scrollIntoView()}`);
       }


  }
}
