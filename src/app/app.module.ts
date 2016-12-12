import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './landing-page/about/about.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { QuoteComponent } from './landing-page/quote/quote.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './landing-page/map/map.component';
import { PlaneComponent } from './p750/plane/plane.component';
import { P750Component } from './p750/p750/p750.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { routing, appRoutingProviders }  from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeaderComponent,
    QuoteComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    MapComponent,
    PlaneComponent,
    P750Component,
    PageNotFoundComponent,
    LandingPageComponent
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
