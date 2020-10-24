import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ApplyComponent } from './apply/apply.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent },
  { path: 'review', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
