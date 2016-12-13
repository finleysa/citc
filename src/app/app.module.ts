import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './landing-page/about/about.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { PlaneComponent } from './p750/plane/plane.component';
import { P750Component } from './p750/p750/p750.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { routing, appRoutingProviders }  from './app.routing';
import { SolutionsComponent } from './landing-page/solutions/solutions.component';
import { ProductsComponent } from './landing-page/products/products.component';
import { TechnologyComponent } from './landing-page/technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeaderComponent,
    ServicesComponent,
    ContactComponent,
    PlaneComponent,
    P750Component,
    PageNotFoundComponent,
    LandingPageComponent,
    SolutionsComponent,
    ProductsComponent,
    TechnologyComponent
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
