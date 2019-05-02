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

}
