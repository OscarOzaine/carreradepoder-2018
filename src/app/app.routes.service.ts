
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HttpModule } from '@angular/http';

import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './views/home/home.component';

const routes: Route[] = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: HomeComponent
  },
  { 
    path: 'profiles/:id', 
    component: ProfileComponent
  },
  { 
    path: '**', 
    redirectTo: '' 
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
