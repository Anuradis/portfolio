import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ResumeComponent } from './main-component/resume/resume.component';
import { AboutComponent } from './main-component/resume/about/about.component';
import { ExperienceComponent } from './main-component/resume/experience/experience.component';
import { SkillsComponent } from './main-component/resume/skills/skills.component';
import { MyProjectsComponent } from './main-component/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    MainComponentComponent,
    ResumeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    MyProjectsComponent,
    FooterComponentComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
