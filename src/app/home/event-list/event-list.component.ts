import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../rest-api.service";
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  isAuthenticated: boolean;
  int: any = [];

    constructor(
      public restApi: RestApiService,private oktaAuth: OktaAuthService,private route: ActivatedRoute

    ) { }

    async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
        );
     const time: string = this.route.snapshot.queryParamMap.get('time');
     this.loadEvents(time)
    }

    // Get event list
    loadEvents(startTime) {
      return this.restApi.getRoomsByTime(startTime).subscribe((data: {}) => {
        this.int = data;
      })
    }

    // Get event list
        loadAll() {
          return this.restApi.getEvents().subscribe((data: {}) => {
            this.int = data;
          })
        }


  }
