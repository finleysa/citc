import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './landing-page/about/about.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { SolutionsComponent } from './solutions-page/solutions/solutions.component';
import { ProductsComponent } from './landing-page/products/products.component';
import { TechnologyComponent } from './landing-page/technology/technology.component';

import { P750Component } from './solutions-page/air/p750/p750.component';
import { AirComponent } from './solutions-page/air/air.component';
import { LandComponent } from './solutions-page/land/land.component';
import { SeaComponent } from './solutions-page/sea/sea.component';
import { RoadrunnerComponent } from './solutions-page/air/roadrunner/roadrunner.component';
import { IcatchComponent } from './solutions-page/air/icatch/icatch.component';
import { ComintComponent } from './solutions-page/air/comint/comint.component';
import { BmsComponent } from './solutions-page/air/bms/bms.component';
import { AirHeaderComponent } from './solutions-page/air/air-header/air-header.component';


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
    SolutionsComponent,
    ProductsComponent,
    TechnologyComponent,
    AirComponent,
    LandComponent,
    SeaComponent,
    RoadrunnerComponent,
    IcatchComponent,
    ComintComponent,
    BmsComponent,
    HeaderComponent,
    AirHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
