import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from "../../rest-api.service";
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  isAuthenticated: boolean;


  constructor(public restApi: RestApiService,private oktaAuth: OktaAuthService,
                                                   public router: Router,private route: ActivatedRoute) { }

   roomN: string = this.route.snapshot.queryParamMap.get('room');
    @Input() eventDetails = { id: '', name:  '' , startTime: '' , requestor:  '', room:  '' , isConfirmed: ''}

  async ngOnInit() {
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
          // Subscribe to authentication state changes
          this.oktaAuth.$authenticationState.subscribe(
            (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
          );

      }
   addEvent(dataEvent) {
       if (window.confirm('Are you sure you want to submit this request?')){
       this.restApi.createEvent(this.eventDetails).subscribe((data: {}) => {
         this.router.navigate(['/home'])
       })
     }
     }

}
