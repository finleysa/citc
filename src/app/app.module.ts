import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './landing-page/about/about.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './landing-page/projects/projects.component';
import { TechnologyComponent } from './landing-page/technology/technology.component';

import { P750Component } from './landing-page/projects/air/p750/p750.component';
import { AirComponent } from './landing-page/projects/air/air.component';
import { LandComponent } from './landing-page/projects/land/land.component';
import { SeaComponent } from './landing-page/projects/sea/sea.component';
import { RoadrunnerComponent } from './landing-page/projects/air/roadrunner/roadrunner.component';
import { IcatchComponent } from './landing-page/projects/air/icatch/icatch.component';
import { ComintComponent } from './landing-page/projects/air/comint/comint.component';
import { BmsComponent } from './landing-page/projects/air/bms/bms.component';
import { AirHeaderComponent } from './landing-page/projects/air/air-header/air-header.component';
import { Mx15Component } from './landing-page/projects/air/mx15/mx15.component';

import { MailchimpService } from "./services/mailchimp.service";
import { AirDropdownComponent } from './landing-page/projects/air/air-dropdown/air-dropdown.component';
import { SeaDropdownComponent } from './landing-page/projects/sea/sea-dropdown/sea-dropdown.component';
import { LandDropdownComponent } from './landing-page/projects/land/land-dropdown/land-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeaderComponent,
    ServicesComponent,
    ContactComponent,
    P750Component,
    PageNotFoundComponent,
    LandingPageComponent,
    ProjectsComponent,
    ProjectsComponent,
    TechnologyComponent,
    AirComponent,
    LandComponent,
    SeaComponent,
    RoadrunnerComponent,
    IcatchComponent,
    ComintComponent,
    BmsComponent,
    HeaderComponent,
    AirHeaderComponent,
    Mx15Component,
    AirDropdownComponent,
    SeaDropdownComponent,
    LandDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [MailchimpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
