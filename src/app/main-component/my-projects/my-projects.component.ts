import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { SlideInOutAnimation } from 'src/assets/animations/animations';
import { ProjectsDataService } from 'src/app/services/projects-data.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
  animations: [SlideInOutAnimation]
})


export class MyProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('seeMore', {static: false}) someFiled: ElementRef;
  @Output() sendSeeMoreElement = new EventEmitter<ElementRef>();

  // weaterAppImg: string = '../../assets/images/weather_app.png';
  // weaterAppImgDraft: string = '../../assets/images/weather_app-min.png';
  // apmImg: string = '../../assets/images/apm.png';
  // apmImgDraft: string = '../../assets/images/apm-min.png';
  // todoListImg: string = '../../assets/images/todo_list.png';
  // todoListImgDraft: string = '../../assets/images/todo_list-min.png';
  // fetchNewsImg: string = '../../assets/images/fetch_news-server.png';
  // fetchNewsImgDraft: string = '../../assets/images/fetch_news-server-min.png';
  // playballImg: string = '../../assets/images/playball_game.png';
  // playballImgDraft: string = '../../assets/images/playball_game-min.png';
  // webDesignImg: string = '../../assets/images/web-design.png';
  // webDesignImgDraft: string = '../../assets/images/web-design-min.png';


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

  animationState = [];
  conentet = [];

  mainProjects: any;
  subProjects: any;

  constructor(private projectsDataService: ProjectsDataService) {
    this.projectsDataService.getMyProjectsData()
    .subscribe({
      next: data => {
        this.mainProjects = data[0].mainProjects;
        this.subProjects = data[0].subProjects;
        console.log(this.mainProjects);
        console.log(this.subProjects);
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.sendSeeMoreElement.emit(this.someFiled);
  }

  // onToggleContentRefactored($event, target: Element, animationState: string, content: boolean) {
  //   this.animationState = this.animationState === 'out' ? 'in' : 'out';
  //   this.content = !this.content;
  //   $event.preventDefault();
  //   target.scrollIntoView();
  // }

  onToggleContentWeatherApp($event, target: Element, ): void {
    this.animationStateWeatherApp = this.animationStateWeatherApp === 'out' ? 'in' : 'out';
    this.weatherAppContent = !this.weatherAppContent;
    $event.preventDefault();
    target.scrollIntoView();
}

onToggleContentAmp($event, el: Element): void {
  this.animationStateAmp = this.animationStateAmp === 'out' ? 'in' : 'out';
  this.ampContent = !this.ampContent;
  $event.preventDefault();
  el.scrollIntoView();
}

onToggleContentToDo($event, el: Element): void {
  this.animationStateToDo = this.animationStateToDo === 'out' ? 'in' : 'out';
  this.toDoContentContent = !this.toDoContentContent;
  $event.preventDefault();
  el.scrollIntoView();
}

onToggleContentFetchServer($event, el: Element): void {
  this.animationStateFetchServer = this.animationStateFetchServer === 'out' ? 'in' : 'out';
  this.fetchServerContent = !this.fetchServerContent;
  $event.preventDefault();
  el.scrollIntoView();
}

onToggleContentPlayball($event, el: Element): void {
  this.animationStatePlayball = this.animationStatePlayball === 'out' ? 'in' : 'out';
  this.playballContent = !this.playballContent;
  $event.preventDefault();
  el.scrollIntoView();
}

onToggleContentWebDesign($event, el: Element): void {
  this.animationStateWebDesign = this.animationStateWebDesign === 'out' ? 'in' : 'out';
  this.webDesignContent = !this.webDesignContent;
  $event.preventDefault();
  el.scrollIntoView();
}

onShowMore(event): void {

  this.animationStateShowMore = this.animationStateShowMore === 'out' ? 'in' : 'out';
  if (this.animationStateShowMore === 'out') {
      this.showMoreName = 'See More';
     } else {
    this.showMoreName = 'See Less';
    event.preventDefault();
  }
}

}
