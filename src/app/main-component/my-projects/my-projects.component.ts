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

  mainProjects: any;
  subProjects: any;

  constructor(private projectsDataService: ProjectsDataService) {
    this.projectsDataService.getMyProjectsData()
    .subscribe({
      next: data => {
        this.mainProjects = data[0].mainProjects;
        this.subProjects = data[0].subProjects;
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.sendSeeMoreElement.emit(this.someFiled);
  }

  onToggleContent($event, target: Element, id: number) {
    console.log(id);
    switch (id) {
      case 0:
        this.animationStateWeatherApp = this.animationStateWeatherApp === 'out' ? 'in' : 'out';
        this.weatherAppContent = !this.weatherAppContent;
        break;
      case 1:
        this.animationStateAmp = this.animationStateAmp === 'out' ? 'in' : 'out';
        this.ampContent = !this.ampContent;
        break;
      case 2:
        this.animationStateToDo = this.animationStateToDo === 'out' ? 'in' : 'out';
        this.toDoContentContent = !this.toDoContentContent;
        break;
      case 3:
        this.animationStateFetchServer = this.animationStateFetchServer === 'out' ? 'in' : 'out';
        this.fetchServerContent = !this.fetchServerContent;
        break;
      case 4:
        this.animationStatePlayball = this.animationStatePlayball === 'out' ? 'in' : 'out';
        this.playballContent = !this.playballContent;
        break;
      case 5:
        this.animationStateWebDesign = this.animationStateWebDesign === 'out' ? 'in' : 'out';
        this.webDesignContent = !this.webDesignContent;
        break;
        default:
    }
    $event.preventDefault();
        // target.scrollIntoView();
  }

  onArrowSwitch(id: number): boolean {
    switch (id) {
      case 0:
        return this.weatherAppContent;
      case 1:
        return this.ampContent;
      case 2:
        return this.toDoContentContent;
      case 3:
        return this.fetchServerContent;
      case 4:
        return this.playballContent;
      case 5:
        return this.webDesignContent;
    }
  }

  onAnimationState(id: number): string {
    switch (id) {
      case 0:
        console.log(`case 0 - ${id}`);
        return this.animationStateWeatherApp;
      case 1:
        console.log(`case 1 - ${id}`);
        return this.animationStateAmp;
      case 2:
        return this.animationStateToDo;
      case 3:
        return this.animationStateFetchServer;
      case 4:
        return this.animationStatePlayball;
      case 5:
        return this.animationStateWebDesign;
        console.log(`case default - ${id}`);
    }

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
