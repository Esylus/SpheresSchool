import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OurschoolComponent } from './components/ourschool/ourschool.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamComponent } from './components/team/team.component';
import { PianoComponent } from './components/piano/piano.component';
import { ProductionComponent } from './components/production/production.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [  // url:component routing
  {path:'', component: HomeComponent},
  {path:'ourschool', component: OurschoolComponent},
  {path:'testimonials', component: TestimonialsComponent},
  {path:'team', component: TeamComponent},
  {path:'piano', component: PianoComponent},
  {path:'production', component: ProductionComponent},
  {path:'contact', component: ContactComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurschoolComponent,
    TestimonialsComponent,
    TeamComponent,
    PianoComponent,
    ProductionComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [  
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
