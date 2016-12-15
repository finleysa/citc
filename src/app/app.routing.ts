import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './landing-page/about/about.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { ProductsComponent } from './landing-page/products/products.component';
import { TechnologyComponent } from './landing-page/technology/technology.component';

import { SolutionsComponent } from './solutions-page/solutions.component';
import { AirComponent } from './solutions-page/air/air.component';
import { LandComponent } from './solutions-page/land/land.component';
import { SeaComponent } from './solutions-page/sea/sea.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'solutions',
    children: [
      {
        path: '',
        component: SolutionsComponent
      },
      {
        path: 'air',
        component: AirComponent
      },
      {
        path: 'land',
        component: LandComponent
      },
      {
        path: 'sea',
        component: SeaComponent
      }
    ]
  },
  { path: 'products', component: ProductsComponent },
  { path: 'technology', component: TechnologyComponent },

  { path: '**', component: LandingPageComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
