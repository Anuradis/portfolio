import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ISkillsData } from '../interfaces/skills-interface';
import { IAboutData } from '../interfaces/about-interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  private resumeDataUrl = '/assets/data/resume-data.json';

  constructor(private http: HttpClient) { }

  getResumeData(): Observable<any> {
  return this.http.get<IAboutData[]>(this.resumeDataUrl)
  .pipe(
    map(data => data),
    catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
