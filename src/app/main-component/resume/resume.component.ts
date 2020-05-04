import { Component, OnInit } from '@angular/core';
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


  constructor(private resumeDataService: ResumeDataService) { }

aboutArr: IAboutData;
skillsArr: ISkillsData;
experienceArr: IExpData;
errorMessage: string;

  ngOnInit() {
    this.resumeDataService.getResumeData()
  .subscribe({
    next: data => {
      this.aboutArr = data[0];
      this.skillsArr = data[1];
      this.experienceArr = data[2];
    },
    error: err => {
      this.errorMessage = err;
    }
  });
  }
}
