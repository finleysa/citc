import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './landing-page/about/about.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { ProjectsComponent } from './landing-page/projects/projects.component';
import { TechnologyComponent } from './landing-page/technology/technology.component';

import { AirComponent } from './landing-page/projects/air/air.component';
import { LandComponent } from './landing-page/projects/land/land.component';
import { SeaComponent } from './landing-page/projects/sea/sea.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectsComponent
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
  { path: 'projects', component: ProjectsComponent },
  { path: 'technology', component: TechnologyComponent },

  { path: '**', component: LandingPageComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
