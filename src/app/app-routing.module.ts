import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { EditAgentComponent } from './edit-agent/edit-agent.component';

const routes: Routes = [
    { path: 'login', component: LoginpageComponent },
    { path: 'editAgent', component: EditAgentComponent },
    { path: 'dashboard/:userRole/:uid', component: DashboardComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
