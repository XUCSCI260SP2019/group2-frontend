import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { RestApiService } from "../rest-api.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isAuthenticated: boolean;
  Event: any = [];
  constructor(public restApi: RestApiService, private oktaAuth: OktaAuthService) { }

 async ngOnInit() {
     this.isAuthenticated = await this.oktaAuth.isAuthenticated();
     // Subscribe to authentication state changes
     this.oktaAuth.$authenticationState.subscribe(
       (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
     );

     this.loadPending()
   }

   // Get event list
           loadPending() {
             return this.restApi.getPending().subscribe((data: {}) => {
               this.Event = data;
             })
           }
 // Delete event
  deleteEvent(id) {
    if (window.confirm('Are you sure you want to delete this?')){
      this.restApi.deleteEvent(id).subscribe(data => {
      this.loadPending()
      })
    }
  }

  updateEvent(id) {
      if(window.confirm('Are you sure you want to confirm this?')){
        this.restApi.updateEvent(id).subscribe(data => {
          this.loadPending()
        })
      }
    }
}
