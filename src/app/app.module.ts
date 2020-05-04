import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ResumeComponent } from './main-component/resume/resume.component';
import { MyProjectsComponent } from './main-component/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    MainComponentComponent,
    ResumeComponent,
    MyProjectsComponent,
    FooterComponentComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
