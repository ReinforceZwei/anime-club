import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMaterialModule } from './materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ApplyComponent } from './apply/apply.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ApplyComponent,
    AboutComponent,
    MembersComponent,
    ContactComponent,
    RecommendationComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
