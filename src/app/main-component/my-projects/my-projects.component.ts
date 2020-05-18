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
  projects: any;

  constructor(private projectsDataService: ProjectsDataService) {
    this.projectsDataService.getMyProjectsData()
    .subscribe({
      next: data => {
        this.projects = data[0].mainProjects;
        this.subProjects = this.projects.slice(0, 3);
        this.mainProjects = this.subProjects;
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.sendSeeMoreElement.emit(this.someFiled);
  }

  onToggleContent($event: Event, target: boolean, id: number) {
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
        return this.animationStateWeatherApp;
      case 1:
        return this.animationStateAmp;
      case 2:
        return this.animationStateToDo;
      case 3:
        return this.animationStateFetchServer;
      case 4:
        return this.animationStatePlayball;
      case 5:
        return this.animationStateWebDesign;
    }

  }

onShowMore(event): void {
  this.animationStateShowMore = this.animationStateShowMore === 'out' ? 'in' : 'out';
  if (this.animationStateShowMore === 'out') {
          this.mainProjects = this.subProjects;
          this.showMoreName = 'See More';
     } else {
          this.mainProjects = this.projects;
          event.preventDefault();
          this.showMoreName = 'See Less';
      }
}
}
