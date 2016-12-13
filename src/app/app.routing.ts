import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AboutComponent } from './landing-page/about/about.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { SolutionsComponent } from './landing-page/solutions/solutions.component';
import { ProductsComponent } from './landing-page/products/products.component';
import { TechnologyComponent } from './landing-page/technology/technology.component';

import { P750Component } from './p750/p750/p750.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'technology', component: TechnologyComponent },

  { path: 'p750', component: P750Component },
  { path: '**', component: LandingPageComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
