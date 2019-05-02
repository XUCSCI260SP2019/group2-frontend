import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './home/event-list/event-list.component';
import { ReserveComponent } from './home/reserve/reserve.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

    {
    path: 'home/event-list',
    component: EventListComponent
    },
    {
        path: 'admin-panel',
        component: AdminPanelComponent
        },

    {
        path: 'home/reserve',
        component: ReserveComponent
        },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
