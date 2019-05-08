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

  }

  // HttpClient API get() method => Fetch event room
    getRoomsByTime(time): Observable<int> {
      return this.http.get<int>(this.apiURL + '/events/time/' + time)

    }

    // HttpClient API get() method => Fetch event list
      getPending(): Observable<Event> {
        return this.http.get<Event>(this.apiURL + '/pending')

      }

    // create event
     createEvent(Event): Observable<Event> {
        return this.http.post<Event>(this.apiURL + '/events', JSON.stringify(Event), this.httpOptions)

      }

      //delete event
      deleteEvent(id){
                return this.http.delete<Event>(this.apiURL + '/events/' + id, this.httpOptions)

            }

       updateEvent(id) {
           return this.http.post(this.apiURL + '/confirm/' + id, this.httpOptions)

         }


}
