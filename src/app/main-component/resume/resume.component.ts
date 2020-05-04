import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ResumeDataService } from 'src/app/services/resume-data.service';
import { IAboutData } from 'src/app/interfaces/about-interface';
import { ISkillsData } from 'src/app/interfaces/skills-interface';
import { IExpData } from 'src/app/interfaces/experience-interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  errorMessage: void;

  constructor(private resumeDataService: ResumeDataService) { }

aboutArr: IAboutData[] = [];
skillsArr: ISkillsData[];
experienceArr: IExpData[];

  ngOnInit() {
    this.resumeDataService.getResumeData().subscribe({
      next: data => {
        this.aboutArr = data[0];
        this.skillsArr = data[1];
        this.experienceArr = data[2];
        console.log(this.aboutArr);
        console.log(this.skillsArr);
        console.log(this.experienceArr);
      },
      error: err => {
        this.errorMessage = err;
      }
    });
  }
}
