import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { SendMsgService } from './services/send-msg.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OurschoolComponent } from './components/ourschool/ourschool.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PianoComponent } from './components/piano/piano.component';
import { ProductionComponent } from './components/production/production.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes: Routes = [  // url:component routing
  { path: '', component: HomeComponent },
  { path: 'ourschool', component: OurschoolComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurschoolComponent,
    TestimonialsComponent,
    PianoComponent,
    ProductionComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    PerformanceComponent,
    PoliciesComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SendMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
