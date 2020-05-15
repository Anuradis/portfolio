import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { INavData } from '../interfaces/nav-interface';


@Injectable({
  providedIn: 'root'
})
export class NavDataService {

  private navDataUrl = '/assets/data/nav-data.json';

  constructor(private http: HttpClient) { }

  getNavData(): Observable<INavData[]> {
    return this.http.get<INavData[]> (this.navDataUrl)
    .pipe(
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
