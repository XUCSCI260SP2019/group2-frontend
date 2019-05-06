import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './event';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
// Define API
  apiURL = 'http://localhost:4200/events';

  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch event list
  getEvents(): Observable<Event> {
    return this.http.get<Event>(this.apiURL + '/events')
    .pipe(
      retry(1),
    )
  }

  // HttpClient API get() method => Fetch event room
    getRoomsByTime(time): Observable<number> {
      return this.http.get<number>(this.apiURL + '/events/time/' + time)
      .pipe(
        retry(1),
      )
    }

    // HttpClient API get() method => Fetch event list
      getPending(): Observable<Event> {
        return this.http.get<Event>(this.apiURL + '/pending')
        .pipe(
          retry(1),
        )
      }


     createEvent(Event): Observable<Event> {
        return this.http.post<Event>(this.apiURL + '/events', JSON.stringify(Event), this.httpOptions)
        .pipe(
          retry(1)
        )
      }


}
