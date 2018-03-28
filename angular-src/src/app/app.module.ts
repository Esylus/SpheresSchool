import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { OurschoolComponent } from './component/ourschool/ourschool.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { TeamComponent } from './component/team/team.component';
import { PianoComponent } from './component/piano/piano.component';
import { ProductionComponent } from './component/production/production.component';
import { ContactComponent } from './component/contact/contact.component';

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
    ContactComponent
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
