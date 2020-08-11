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

  latawiecAppContent = false;
  geomessageContent = false;
  jarmoneyboxContent = false;
  weatherAppContent = false;
  juicerContent = false;
  playballContent = false;
  liveChatAppContent = false;

  animationStateLatawiec = 'out';
  animationStateGeoMessage = 'out';
  animationStatejarmoneybox = 'out';
  animationStateWeaterApp = 'out';
  animationStateJuicer = 'out';
  animationStatePlayball = 'out';
  animationStateLiveChatApp = 'out';

  animationStateShowMore = 'out';

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
        this.animationStateLatawiec = this.animationStateLatawiec === 'out' ? 'in' : 'out';
        this.latawiecAppContent = !this.latawiecAppContent;
        break;
      case 1:
        this.animationStateWeaterApp = this.animationStateWeaterApp === 'out' ? 'in' : 'out';
        this.geomessageContent = !this.geomessageContent;
        break;
      case 2:
        this.animationStatejarmoneybox = this.animationStatejarmoneybox === 'out' ? 'in' : 'out';
        this.jarmoneyboxContent = !this.jarmoneyboxContent;
        break;
      case 3:
        this.animationStateGeoMessage = this.animationStateGeoMessage === 'out' ? 'in' : 'out';
        this.weatherAppContent = !this.weatherAppContent;
        break;
      case 4:
        this.animationStatePlayball = this.animationStatePlayball === 'out' ? 'in' : 'out';
        this.playballContent = !this.playballContent;
        break;
      case 5:
        this.animationStateLiveChatApp = this.animationStateLiveChatApp === 'out' ? 'in' : 'out';
        this.liveChatAppContent = !this.liveChatAppContent;
        break;
      case 6:
        this.animationStateJuicer = this.animationStateJuicer === 'out' ? 'in' : 'out';
        this.juicerContent = !this.juicerContent;
        break;
        default:
    }
    $event.preventDefault();
  }

  onArrowSwitch(id: number): boolean {
    switch (id) {
      case 0:
        return this.latawiecAppContent;
      case 1:
        return this.geomessageContent;
      case 2:
        return this.jarmoneyboxContent;
      case 3:
        return this.weatherAppContent;
      case 4:
        return this.playballContent;
      case 5:
        return this.liveChatAppContent;
      case 6:
        return this.juicerContent;
    }
  }

  onAnimationState(id: number): string {
    switch (id) {
      case 0:
        return this.animationStateLatawiec;
      case 1:
        return this.animationStateWeaterApp;
      case 2:
        return this.animationStatejarmoneybox;
      case 3:
        return this.animationStateGeoMessage;
      case 4:
        return this.animationStatePlayball;
      case 5:
        return this.animationStateLiveChatApp;
      case 6:
        return this.animationStateJuicer;
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
